import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';


export type ChartType = 'bar' | 'column' | 'area' | 'pie' | 'donut' | 'polar' | 'radar' | 'mixed' | 'line';
export type ChartOrientation = '' | 'reverse';
export type LegendShape = 'legend-circle' | 'legend-ellipse' | 'legend-square' | 'legend-rectangle' | 'legend-rhombus' | 'legend-line';
export type LabelAlignment = 'labels-align-start' | 'labels-align-center' | 'labels-align-end' ;

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
  color?: string;
  value: number;
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
}

export interface ChartDataSet {
  header?: string;
  rows: Row[] | number[];
}


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChartComponent implements OnInit {
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
  @Input() labelAlignment: LabelAlignment = 'labels-align-center';

  @Input() orientation: ChartOrientation;
  @Input() showLabels = true;
  @Input() showPrimaryAxis = true;
  @Input() showDataAxis = true;
  @Input() stacked = false;
  @Input() multiple = false;

  @Input() nbSecondaryAxis = 0;
  @Input() dataSpacing = 20;
  @Input() dataSetsSpacing = 0;
  // data
  @Input() chartData: ChartData;
  @Input() max: number = null;

  constructor() {
    this.type = 'line';
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

  isRowArray(data: Row[] | number[]): data is Row[] {
    return (Array.isArray(data)) && (data as Row[]).length !== undefined;
  }

  isNumberArray(data: Row[] | number[]): data is number[] {
    return (Array.isArray(data)) && (data as number[]).length !== undefined;
  }

  isRowElement(data: Row | number): data is Row {
    return (data as Row).data !== undefined;
  }

  convertRows(dataRows: any[]): Row[] {
    const rows: Row[] = [];
    dataRows.forEach((r) => rows.push({value: r, data: r.toString()}));
    return rows;
  }

  convertLabels(labelSet: any[]): Label[] {
    const labels: Label[] = [];
    labelSet.forEach((l) => labels.push(
      {text: l, hide: false, class: null}));
    return labels;
  }

  ngOnInit(): void {

    if (this.chartData.labels && this.chartData.labels.length > 0) {
      if (typeof this.chartData.labels[0] === 'string') {
        this.chartData.labels = this.convertLabels(this.chartData.labels);
        console.log('labels', this.chartData.labels);
      }
    }

    if (this.chartData.datasets.length > 0) {
      // TODO: check array type
      this.chartData.datasets.forEach((dataset) => {
          if (dataset.rows.length > 0 && !this.isRowElement(dataset.rows[0])) {
            dataset.rows = this.convertRows(dataset.rows);
          }
        }
      );

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
      console.log(this.max);
    }
    this.multiple = this.chartData.datasets.length > 1;
  }

  getSize(row: Row): number {
    return row.value / this.max;
  }

  // TODO: handle start
  getStart(row: Row): string {
    return '0.0';
  }

  getColor(row: Row, index: number): string {
    if (Boolean(row.color)) {
      return row.color;
    }
    if (this.chartData.colors && this.chartData.colors.length > index) {
      return this.chartData.colors[index];
    }
    return `var(--color-${index})`;
  }
}
