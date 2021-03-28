import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../../../../angular-chart-css/src/lib';

@Component({
  selector: 'app-pie-1',
  templateUrl: './pie1.component.html',
  styleUrls: ['./pie1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Pie1Component implements OnInit {

  constructor() { }

  chartDataSet: ChartData = {
    // legends: [{text: '2000'}, {text: '2010'}, {text: '2020'}],
    legends: [],
    max: 1000,
    headers: ['Month', 'Stats'],
    labels: ['2005', '2010', '2015', '2020'],
//    colors: [rgb(240, 100, 100), rgb(130, 190, 255),  rgb(140, 220, 120), rgb(190, 130, 255)],
    colors: ['green', 'red', 'blue', 'yellow'],
    datasets: [
      {
/*        rows: [
          {start: 0, value: 0.10, data: '100'},
          {start: 0.10, value: 0.18, data: '180'},
          {start: 0.28, value: 0.56, data: '560'},
          {start: 0.84, value: 0.16, data: '160'}
          ],
*/
        rows: [
          {start: 0, value: 100, data: '100'},
          {start: 100, value: 180, data: '180'},
          {start: 280, value: 560, data: '560'},
          {start: 840, value: 160, data: '160'}
        ],
      }
    ]
  };

  ngOnInit(): void {
  }

}
