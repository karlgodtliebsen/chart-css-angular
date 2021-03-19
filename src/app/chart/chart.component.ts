import {Component, Input, OnInit} from '@angular/core';


export type ChartType = 'bar' | 'column' | 'area' | 'pie' | 'donut' | 'polar' | 'radar' | 'mixed' | 'line';
export type ChartOrientation = '' | 'reverse';
export type LegendShape = 'legend-circle' | 'legend-ellipse' | 'legend-square' | 'legend-rectangle' | 'legend-rhombus' | 'legend-line';

export interface ChartData {
  colors?: string[];
  labels?: string[];
  legends?: Legend[];
  datasets?: ChartDataSet[];
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

export interface ChartDataSet {
  rows: Row[] | number[];
  headers?: string[];

}


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
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
  private max: number;

  constructor() {
    this.type = 'line';
    this.max = 1;
    this.chartData = {
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
  convert(dataRows: any[]): Row[] {
    const rows: Row[] = [];
    dataRows.forEach((r) => rows.push({value: r, data: r.toString()}));
    return rows;
  }

  ngOnInit(): void {
    if (this.chartData.datasets.length > 0) {
      // TODO: check array type
      this.chartData.datasets.forEach((dataset) => {
          if (dataset.rows.length > 0 && !this.isRowElement(dataset.rows[0])) {
            dataset.rows = this.convert( dataset.rows);
          }
        }
      );

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
      console.log(m);
    }
    this.multiple = this.chartData.datasets.length > 1;
  }

  getSize(row: Row): number {
    return row.value / this.max;
  }

  getStart(row: Row): string {
    return '0.2';
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
