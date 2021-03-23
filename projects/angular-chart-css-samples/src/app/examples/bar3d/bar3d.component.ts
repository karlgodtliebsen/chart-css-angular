import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../../../../angular-chart-css/src/lib';

@Component({
  selector: 'app-bar-3d',
  templateUrl: './bar3d.component.html',
  styleUrls: ['./bar3d.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Bar3dComponent implements OnInit {

  constructor() { }
  chartData: ChartData = {
    labels: ['America', 'Europe'],
    datasets: [
      {
        rows: [
          {data: '10', value: 10, tooltip: 'tips 10'},
          {data: '20', value: 20, tooltip: 'tips 20',},
          {data: '30', value: 30, tooltip: 'tips 30'},
          {data: '40', value: 40, tooltip: 'tips 40'},
          {data: '50', value: 50, tooltip: 'tips 50'},
          {data: '60', value: 60, tooltip: 'tips 60'},
          {data: '70', value: 70, tooltip: 'tips 70'},
        ]
      },
      {
        rows: [
          {data: '1', value: 21, tooltip: 'tips 1'},
          {data: '2', value: 32, tooltip: 'tips 2'},
          {data: '3', value: 43, tooltip: 'tips 3'},
          {data: '4', value: 54, tooltip: 'tips 4'},
          {data: '5', value: 65, tooltip: 'tips 5'},
          {data: '6', value: 76, tooltip: 'tips 6'},
          {data: '7', value: 87, tooltip: 'tips 7'},
        ]
      }],
  };

  ngOnInit(): void {
  }

}
