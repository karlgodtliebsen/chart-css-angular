import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../chart/models';

@Component({
  selector: 'app-area-1',
  templateUrl: './area1.component.html',
  styleUrls: ['./area1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Area1Component implements OnInit {

  constructor() { }
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
  data: number[] = [
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
    legends: [{text: 'Monthly Expenses', }],
    labels: this.labels,
    datasets: [
      {
        rows: this.data
      }]
  };

  ngOnInit(): void {
  }

}
