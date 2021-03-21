export type ChartType = 'bar' | 'column' | 'area' | 'pie' | 'donut' | 'polar' | 'radar' | 'mixed' | 'line';
export type ChartOrientation = '' | 'reverse';
export type LegendShape = 'legend-circle' | 'legend-ellipse' | 'legend-square' | 'legend-rectangle' | 'legend-rhombus' | 'legend-line';
export type LabelAlignment = 'labels-align-start' | 'labels-align-center' | 'labels-align-end';

export interface ChartData {
  max?: number;
  colors?: string[];
  labels?: string[] | Label[];
  legends?: string[] | Legend[];
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

export interface ReversedDataSet {
  label?: Label;
  rows: Row[];
}
