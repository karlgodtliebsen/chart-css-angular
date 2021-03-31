import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ChartBase} from './chart-base';
import {
  ChartData, ChartDataSet,
  ChartOrientation,
  ChartType,
  DataPoint,
  Label,
  LabelAlignment,
  Legend,
  LegendShape,
  ReversedDataSet,
  Row
} from './models';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chart-css',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss', './pie.scss', './mixed.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChartComponent extends ChartBase implements OnInit, AfterViewInit {
  @Input() type: ChartType;

  // caption
  @Input() caption: string;

  // styling
  @Input() legendStyle: string;
  @Input() captionStyle: string;

  @Input() height: string;
  @Input() width: string;

  @Input() dots: boolean;

  @Input() chartId: string;
  @Input() showData = false;
  @Input() showDataOnHover = true;
  @Input() legendInline = true;
  @Input() legendShape: LegendShape = 'legend-circle';

  @Input() orientation: ChartOrientation;

  @Input() labelAlignment: LabelAlignment = 'labels-align-center';
  @Input() showLabels = true;
  @Input() hideLabelsNth = -1;
  @Input() showOnlyLabelsNth = -1;

  @Input() showPrimaryAxis = true;
  @Input() showDataAxis = true;
  @Input() stacked = false;
  @Input() multiple = false;
  @Input() reverse = false;
  @Input() showPercentage = false;
  @Input() nbSecondaryAxis = 0;
  @Input() dataSpacing = 10;
  @Input() dataSetsSpacing = 0;
  @Input() max: number = null;
  @Input() start = 0.0;

  @Input() chartData: ChartData;
  @Input() overlay = false;
  @Input() mixed = false;
  @Input() mixedDirectives: string[] = [];

//  @ViewChild('chartContainer', {read: ElementRef, static: false }) container!: ElementRef;
  @ViewChild('chartContainer', {read: ElementRef}) container!: ElementRef;

  constructor() {
    super();
    this.type = 'column';
    this.multiple = false;
    this.mixed = false;
    this.chartData = this.createChartData();
  }

  get tableClasses(): string {
    const c: string[] = [];
    if (Boolean(this.orientation)) {
      c.push(this.orientation);
    }
    if (Boolean(this.reverse)) {
      c.push('reverse');
    }
    if (Boolean(this.labelAlignment)) {
      c.push(this.labelAlignment);
    }
    if (Boolean(this.multiple)) {
      c.push(`multiple`);
    }
    if (Boolean(this.stacked)) {
      c.push(`stacked`);
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

  get typeClass(): string {
    if (Boolean(this.type)) {
      return this.type;
    }
    return '';
  }

  get legendClasses(): string {
    if (Boolean(this.legendShape)) {
      return this.legendShape;
    }
    return '';
  }

  public getSize(row: Row, max: number, rows?: Row[]): number {
    if (!this.showPercentage) {
      return row.value / max;
    }
    if (rows) {
      let sum = 0.0;
      rows.forEach((r) => sum += r.value);
      return row.value / sum;
    }
    return 0.0;
  }

  public getMixed(index: number): string {
//    window.document.documentElement.style.setProperty('--chart-grid-template-rows', '300px 50px 50px');
    if (this.mixed && this.mixedDirectives.length > index) {
      return this.mixedDirectives[index];
    }
    return '';
  }

  ngOnInit(): void {
    this.initialize();
  }

  ngAfterViewInit(): void {
    // setTimeout(() => this.initialize() );
    if (this.mixed && this.mixedDirectives.length > 0) {
      window.document.documentElement.style.setProperty('--chart-grid-template-rows', '300px 50px 50px');
    }
  }

  getReverseMapped(): ReversedDataSet[] {
    const rowsCollection: ReversedDataSet[] = [];
    if (this.chartData.datasets && this.chartData.datasets.length > 0) {
      const nbOfRows = this.chartData.datasets[0].rows.length;

      for (let row = 0; row < nbOfRows; row++) {
        const rows: Row[] = [];
        let label: any = {text: ''};
        if (this.chartData.labels && this.chartData.labels.length > row) {
          label = this.chartData.labels[row];
        }
        rowsCollection.push({rows, label});
      }
      for (let row = 0; row < nbOfRows; row++) {
        const rows = rowsCollection[row].rows;
        // tslint:disable-next-line:prefer-for-of
        for (let ds = 0; ds < this.chartData.datasets.length; ds++) {
          const r: any = this.chartData.datasets[ds].rows[row];
          rows.push(r);
        }
      }
    }
    return rowsCollection;
  }

  private initialize(): void {
    if (this.height) {
      window.document.documentElement.style.setProperty('--chart-height', this.height);
    }
    if (this.width) {
    }

    if (this.type === 'line') {
      this.dataSpacing = 0;
      this.showDataAxis = false;
    }
    if (this.type === 'area') {
      this.dataSpacing = 0;
      this.showDataAxis = false;
    }
    if (!this.chartData) {
      this.chartData = this.createChartData();
    }

    if (this.chartData && this.chartData.datasets && this.chartData.datasets.length > 1) {
      this.multiple = true;
    }
    if (this.type === 'mixed') {
      this.multiple = false;
      this.mixed = true;
    }

    this.convertDataToRowData();
    this.adjustLegends();
    this.adjustLabels();
    this.adjustRowData();
    this.findMax();
  }

  private createChartData(): ChartData {
    return {
      max: null,
      labels: [],
      legends: [],
      datasets: [],
    };
  }

  private adjustLabels(): void {
    if (this.chartData.labels && this.chartData.labels.length > 0) {
      if (typeof this.chartData.labels[0] === 'string') {
        this.chartData.labels = this.convertLabels(this.chartData.labels);
      }
    }
  }

  private adjustLegends(): void {
    if (this.chartData.legends && this.chartData.legends.length > 0) {
      if (typeof this.chartData.legends[0] === 'string') {
        this.chartData.legends = this.convertLegends(this.chartData.legends);
      }
    }
  }

  private isRowElement(data: any): boolean {
    return  (data as any).value !== undefined;
  }

  private isDatapoint(data: any): boolean {
    return (data as any).x !== undefined;
  }

  private isNumbers(data: any): boolean {
    return typeof data === 'number';
  }

  private convertDatapointsToRows(dataSet: ChartDataSet): Row[] {
    const dataPoints: DataPoint[] = dataSet.rows as DataPoint[];
    const labels: string[] = [];
    let rows: Row[] = [];
    if (dataPoints.length === 0) {
      return rows;
    }
    dataPoints.forEach((r) => {
      rows.push({value: r.y, start: 0.0, data: r.y.toString(), useDefaultColor: false, dot: this.dots});
      labels.push( r.x.toString());
    });
    rows = this.setStartPositions(rows);
    this.chartData.labels = labels;
    return rows;
  }

  private convertNumbersToRows(dataSet: ChartDataSet): Row[] {
    const numbers: number[] = dataSet.rows as number[];
    let rows: Row[] = [];
    if (numbers.length === 0) {
      return rows;
    }
    numbers.forEach((r) => rows.push({value: r, start: 0.0, data: r.toString(), useDefaultColor: false, dot: this.dots} ));
    rows = this.setStartPositions(rows);
    return rows;
  }

  private setDataRows(dataRows: Row[]): Row[] {
    if (dataRows.length === 0) {
      return dataRows;
    }
    dataRows.forEach((row) => row.data = row.value.toString());
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

  private fillStartPositions(rows: Row[]): Row[] {
    if (rows.length === 0) {
      return rows;
    }
    if (!rows[0].start) {
      rows[0].start = this.start;
    }
    let previous = rows[0].value;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 1; i < rows.length; i++) {
      if (!rows[i].start) {
        rows[i].start = previous;
      }
      previous = rows[i].value;
    }
    return rows;
  }

  private convertLabels(labelSet: any[]): Label[] {
    const labels: Label[] = [];
    labelSet.forEach((l) => labels.push({text: l, hide: false, class: null, subClass: null}));
    const hideLabelN = parseInt(this.hideLabelsNth.toString(), 10);
    const showOnlyLabelsNth = parseInt(this.showOnlyLabelsNth.toString(), 10);

    if (hideLabelN > -1) {
      let index = -1;
      labels.forEach((l) => {
        if (index % hideLabelN === 0) {
          l.hide = true;
        }
        index++;
      });
    } else if (showOnlyLabelsNth > -1) {
      let index = -1;
      labels.forEach((l) => l.hide = true);
      labels.forEach((l) => {
        if (index % showOnlyLabelsNth === 0) {
          l.hide = false;
        }
        index++;
      });
    }
    return labels;
  }

  private convertLegends(legendColl: any[]): Legend[] {
    const legends: Legend[] = [];
    legendColl.forEach((l) => legends.push({text: l}));
    return legends;
  }

  private adjustRowData(): void {
    if (this.chartData.datasets && this.chartData.datasets.length > 0) {
      this.chartData.datasets.forEach((dataset) => {
          if (typeof dataset.label === 'string') {
            dataset.label = {
              text: dataset.label,
            };
          }
          if (dataset.rows && dataset.rows.length > 0) {
            const rows: any = dataset.rows;
            dataset.rows = this.fillStartPositions(rows);
          }
          if (Boolean(dataset.generateData)) {
            const rws: any[] = dataset.rows;
            this.setDataRows(rws);
          }
        }
      );
    }
  }
  private convertDataToRowData(): void {
    if (this.chartData.datasets && this.chartData.datasets.length > 0) {
      this.chartData.datasets.forEach((dataset) => {
          if (dataset.rows && dataset.rows.length > 0) {
            if (this.isDatapoint(dataset.rows[0])) {
              dataset.rows = this.convertDatapointsToRows(dataset);
            }
            else
            if (this.isNumbers(dataset.rows[0])) {
              dataset.rows = this.convertNumbersToRows(dataset);
            }
          }
        }
      );
    }
  }


  private findMax(): void {
    if (this.chartData.datasets.length > 0) {
      if (this.max === null && !this.chartData.max) {
        let m = Number.MIN_SAFE_INTEGER;
        this.chartData.datasets.forEach((dataset) => {
            dataset.rows.forEach((r: any) => {
              if (m < r.value) {
                m = r.value;
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
