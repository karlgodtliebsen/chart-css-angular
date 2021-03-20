import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData, ChartDataSet} from '../../chart/chart.component';

@Component({
  selector: 'app-line-3',
  templateUrl: './line3.component.html',
  styleUrls: ['./line3.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Line3Component implements OnInit {

  constructor() { }
  labels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  datasets: ChartDataSet[] = [
    {

      rows: [65.0, 59.0, 80, 81, 56, 55, 40],
    },
    {
      rows: [28, 48, 40, 19, 86, 27, 90],
    },
  ];

  chartDataSet: ChartData = {
    max: 100,
    labels: this.labels,
    datasets: this.datasets
  };


  ngOnInit(): void {
  }
}
