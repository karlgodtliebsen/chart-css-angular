import {Component, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ChartBase} from './chart-base';


export type ChartType = 'bar' | 'column' | 'area' | 'pie' | 'donut' | 'polar' | 'radar' | 'mixed' | 'line';
export type ChartOrientation = '' | 'reverse';
export type LegendShape = 'legend-circle' | 'legend-ellipse' | 'legend-square' | 'legend-rectangle' | 'legend-rhombus' | 'legend-line';
export type LabelAlignment = 'labels-align-start' | 'labels-align-center' | 'labels-align-end';

export interface ChartData {
  max?: number;
  colors?: string[];
  labels?: string[] | Label[];
  legends?: Legend[];
  datasets?: ChartDataSet[];
  headers?: string[];
}

export interface Row {
  datacolor?: string;
  useDefaultColor?: boolean;
  color?: string;
  value: number;
  start?: number;
  data?: string;
  tooltip?: string;
}

export interface Legend {
  color?: string;
  text: string;
}

export interface Label {
  hide?: boolean;
  text: string;
  class?: string;
  subClass?: string;
}

export interface ChartDataSet {
  label?: string | Label;
  rows: Row[] | number[];
}


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChartComponent extends ChartBase implements OnInit {
  @Input()
  type: ChartType;

  // caption
  @Input() caption: string;

  // styling
  @Input() legendStyle: string;
  @Input() captionStyle: string;

  @Input() chartId: string;
  @Input() showData = false;
  @Input() showDataOnHover = true;
  @Input() legendInline = true;
  @Input() legendShape: LegendShape = 'legend-circle';

  @Input() orientation: ChartOrientation;

  @Input() labelAlignment: LabelAlignment = 'labels-align-center';
  @Input() showLabels = true;
  @Input() hideLabelsNth = -1;

  @Input() showPrimaryAxis = true;
  @Input() showDataAxis = true;
  @Input() stacked = false;
  @Input() multiple = false;
  @Input() nbSecondaryAxis = 0;
  @Input() dataSpacing = 10;
  @Input() dataSetsSpacing = 0;
  @Input() max: number = null;
  @Input() start = 0.0;

  @Input()  chartData: ChartData;
  @Input()  overlay = false;

  constructor() {
    super();
    this.type = 'column';
    this.multiple = false;
    this.chartData = {
      max: null,
      legends: [],
      datasets: [],
    };
  }

  get tableClasses(): string {
    const c: string[] = [];
    if (Boolean(this.type)) {
      c.push(this.type);
    }
    if (Boolean(this.orientation)) {
      c.push(this.orientation);
    }
    if (Boolean(this.labelAlignment)) {
      c.push(this.labelAlignment);
    }
    if (Boolean(this.multiple)) {
      c.push(`multiple`);
    }
    if (Boolean(this.dataSpacing)) {
      c.push(`data-spacing-${this.dataSpacing}`);
    }
    if (Boolean(this.dataSetsSpacing)) {
      c.push(`datasets-spacing-${this.dataSetsSpacing}`);
    }
    if (Boolean(this.nbSecondaryAxis)) {
      c.push(`show-secondary-${this.nbSecondaryAxis}-axis`);
    }
    return c.join(' ');
  }

  get legendClasses(): string {
    const c: string[] = [];
    if (Boolean(this.legendShape)) {
      c.push(this.legendShape);
    }
    return c.join(' ');
  }


  ngOnInit(): void {

    console.log('ngOnInit', this.chartData);

    if (this.type === 'line') {
      this.dataSpacing = 0;
      this.showDataAxis = false;
    }

    if (this.type === 'area') {
      this.dataSpacing = 0;
      this.showDataAxis = false;
    }

    this.adjustLabels();
    this.adjustRowDataAndFindMax();
    if (this.chartData.datasets && this.chartData.datasets.length > 1) {
      this.multiple = true;
    }
  }

  private adjustLabels(): void {
    if (this.chartData.labels && this.chartData.labels.length > 0) {
      if (typeof this.chartData.labels[0] === 'string') {
        this.chartData.labels = this.convertLabels(this.chartData.labels);
      }
    }
  }

  private isRowArray(data: Row[] | number[]): data is Row[] {
    return (Array.isArray(data)) && (data as Row[]).length !== undefined;
  }

  private isNumberArray(data: Row[] | number[]): data is number[] {
    return (Array.isArray(data)) && (data as number[]).length !== undefined;
  }

  private isRowElement(data: Row | number): data is Row {
    return (data as Row).data !== undefined;
  }

  private convertRows(dataRows: any[]): Row[] {
    let rows: Row[] = [];
    if (dataRows.length === 0) {
      return rows;
    }
    dataRows.forEach((r) => rows.push({value: r, start: 0.0, data: r.toString(), useDefaultColor: false}));
    rows = this.setStartPositions(rows);
    return rows;
  }

  private setStartPositions(rows: Row[]): Row[] {
    if (rows.length === 0) {
      return rows;
    }
    rows[0].start = this.start;
    let previous = rows[0].value;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 1; i < rows.length; i++) {
      rows[i].start = previous;
      previous = rows[i].value;
    }
    return rows;
  }

  private convertLabels(labelSet: any[]): Label[] {
    const labels: Label[] = [];
    labelSet.forEach((l) => labels.push({text: l, hide: false, class: null, subClass: null}));
    const hideLabelN = parseInt(this.hideLabelsNth.toString(), 10);
    if (hideLabelN > -1) {
      let index = -1;
      labels.forEach((l) => {
        if (index % hideLabelN === 0) {
          l.hide = true;
        }
        index++;
      });
    }
    return labels;
  }

  private adjustRowDataAndFindMax(): void {
    if (this.chartData.datasets && this.chartData.datasets.length > 0) {
      this.chartData.datasets.forEach((dataset) => {
          if (typeof dataset.label === 'string') {
            dataset.label = {
              text: dataset.label,
            };
          }
          if (dataset.rows.length > 0 && !this.isRowElement(dataset.rows[0])) {
            dataset.rows = this.convertRows(dataset.rows);
          }
        }
      );
      this.findMax();
    }
  }

  private findMax(): void {
    if (this.chartData.datasets.length > 0) {
      if (this.max === null && !this.chartData.max) {
        let m = Number.MIN_SAFE_INTEGER;
        this.chartData.datasets.forEach((dataset) => {
            dataset.rows.forEach((r) => {
              const a: any = r;
              if (m < a.value) {
                m = a.value;
              }
            });
          }
        );
        this.max = m;
      } else {
        if (this.chartData.max) {
          this.max = this.chartData.max;
        }
      }
    }
  }
}
