import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../../../../angular-chart-css/src/lib';

@Component({
  selector: 'app-mixed-1',
  templateUrl: './mixed1.component.html',
  styleUrls: ['./mixed1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Mixed1Component implements OnInit {

  constructor() { }

  chartDataSet: ChartData = {
    // legends: [{text: '2000'}, {text: '2010'}, {text: '2020'}],
  //  legends: [],
   // max: 1,
  //  headers: ['Month', 'Stats'],
  //  labels: ['2005', '2010', '2015', '2020'],
//    colors: [rgb(240, 100, 100), rgb(130, 190, 255),  rgb(140, 220, 120), rgb(190, 130, 255)],
 //   colors: ['green', 'red', 'blue', 'yellow'],
    datasets: [
      {
        type: 'area',
        rows: [
          {start: 0.3, value: 0.4, data: '0.4'},
          {start: 0.4, value: 0.8, data: '0.8'},
          {start: 0.8, value: 0.6, data: '0.6'},
          {start: 0.6, value: 1, data: '1'},
          {start: 1, value: 0.3, data: '0.3'},
          {start: 0.3, value: 0.8, data: '0.8'},
          {start: 0.8, value: 0.6, data: '0.6'},
          {start: 0.6, value: 1, data: '1'},
          {start: 1, value: 0.3, data: '0.3'},
          {start: 0.3, value: 0.8, data: '0.8'},
          {start: 0.8, value: 0.6, data: '0.6'},
          {start: 0.6, value: 1, data: '1'},
          {start: 1, value: 0.3, data: '0.3'},
        ],
      },
      {
        type: 'line',
        generateData: true,
        rows: [
          {start: 0.4, value: 0.5 },
          {start: 0.5, value: 0.3 },
          {start: 0.3, value: 0.4 },
          {start: 0.4, value: 0.7 },
        ],
      },
      {
        type: 'column',
        generateData: true,
        rows: [
          { value: 0.6},
          { value: 0.9},
          { value: 1},
          { value: 0.4},
          { value: 0.3},
          { value: 0.6},
          { value: 0.9},
          { value: 1.0},
          { value: 0.4},
          { value: 0.3},
          { value: 0.6},
          { value: 0.9},
          { value: 1.0},
          { value: 0.4},
          { value: 0.3},
          { value: 0.6},
          { value: 0.9},
          { value: 1.0},
          { value: 0.4},
          { value: 0.3},
        ],
      }
    ]
  };

  ngOnInit(): void {
  }

}
