import {ChartData, Row} from './models';

export class ChartBase {


  public getStart(row: Row, max: number): number {
    if (row.start !== undefined) {
      return row.start / max;
    }
    return undefined;
  }

  public getColor(chartData: ChartData, row: Row, index: number): string {
    if (row.color !== undefined) {
      return row.color;
    }
    if (chartData.colors && chartData.colors.length > index) {
      return chartData.colors[index];
    }
    if (row.useDefaultColor) {
      return `var(--color-${index})`;
    }
    return undefined;
  }
}
