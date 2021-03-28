import { Component, OnInit } from '@angular/core';
import {ChartData} from '../../../../../angular-chart-css/src/lib';

@Component({
  selector: 'app-mixed-1',
  templateUrl: './mixed1.component.html',
  styleUrls: ['./mixed1.component.scss']
})
export class Mixed1Component implements OnInit {

  constructor() { }

  chartDataSet: ChartData = {
    // legends: [{text: '2000'}, {text: '2010'}, {text: '2020'}],
  //  legends: [],
    max: 1000,
  //  headers: ['Month', 'Stats'],
  //  labels: ['2005', '2010', '2015', '2020'],
//    colors: [rgb(240, 100, 100), rgb(130, 190, 255),  rgb(140, 220, 120), rgb(190, 130, 255)],
 //   colors: ['green', 'red', 'blue', 'yellow'],
    datasets: [
      {
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
