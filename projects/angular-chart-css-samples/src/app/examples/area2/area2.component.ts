import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../../../../angular-chart-css/src/lib';

@Component({
  selector: 'app-area-2',
  templateUrl: './area2.component.html',
  styleUrls: ['./area2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Area2Component implements OnInit {

  labels: string[] = [
    'January 2010',
    'February 2010',
    'March 2010',
    'April 2010',
    'May 2010',
    'June 2010',
    'January 2011',
    'February 2011',
    'March 2011',
    'April 2011',
    'May 2011',
    'June 2011',
    'January 2012',
    'February 2012',
    'March 2012',
    'April 2012',
    'May 2012',
    'June 2012',
    'January 2013',
    'February 2013',
    'March 2013',
    'April 2013',
    'May 2013',
    'June 2013',
  ];
  dataSet1: number[] = [
    1940.1,
    1950.6,
    1700.4,
    1600.9,
    1710.5,
    1060.4,
    1290.2,
    1440.0,
    1460.0,
    1350.6,
    1480.5,
    1800.4,
    1600.9,
    1710.5,
    1060.4,
    1290.2,
    1440.0,
    1460.0,
    1350.6,
    1480.5,
    1800.4,
    1940.1,
    1950.6,
    1700.4,
  ];
  dataSet2: number[] = [
    1940.1,
    1950.6,
    1700.4,
    1600.9,
    1710.5,
    1060.4,
    1290.2,
    1440.0,
    1460.0,
    1350.6,
    1480.5,
    1800.4,
    1600.9,
    1710.5,
    1060.4,
    1290.2,
    1440.0,
    1460.0,
    1350.6,
    1480.5,
    1800.4,
    1940.1,
    1950.6,
    1700.4,
  ];
  dataSet3: number[] = [
    1940.1,
    1950.6,
    1700.4,
    1600.9,
    1710.5,
    1060.4,
    1290.2,
    1440.0,
    1460.0,
    1350.6,
    1480.5,
    1800.4,
    1600.9,
    1710.5,
    1060.4,
    1290.2,
    1440.0,
    1460.0,
    1350.6,
    1480.5,
    1800.4,
    1940.1,
    1950.6,
    1700.4,
  ];
  chartData: ChartData = {
    legends: [{text: 'More Data',}],
    labels: this.labels,
    datasets: [
      {
        rows: this.dataSet1
      },
      {
        rows: this.dataSet2
      },
      {
        rows: this.dataSet3
      }
    ]
  };

  constructor() {
    for (let i = 0; i < this.dataSet2.length; i++) {
      this.dataSet2[i] = this.dataSet2[i] - 1100.0;
      this.dataSet3[i] = this.dataSet3[i] + 1100.0;
    }

  }

  ngOnInit(): void {
  }

}
