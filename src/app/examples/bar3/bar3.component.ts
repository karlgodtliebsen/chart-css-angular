import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../chart/models';

@Component({
  selector: 'app-bar-3',
  templateUrl: './bar3.component.html',
  styleUrls: ['./bar3.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Bar3Component implements OnInit {

  constructor() { }

  chartData: ChartData = {
    max: 30,
    headers: ['Day', 'Forecast'],
    labels: [
      {text: 'Mon', subClass: 'sun'},
      {text: 'Tue', subClass: 'sun'},
      {text: 'Wed', subClass: 'sun'},
      {text: 'Thu', subClass: 'cloud'},
      {text: 'Fri', subClass: 'cloud'},
      {text: 'Sat', subClass: 'cloud'},
      {text: 'Sun', subClass: 'sun'},
    ],
    datasets: [
      {
        rows:  [
          {value: 28, data: '28°'},
          {value: 25, data: '25°'},
          {value: 23, data: '23°'},
          {value: 16, data: '16°'},
          {value: 14, data: '14°'},
          {value: 18, data: '18°'},
          {value: 22, data: '22°'},
        ]

      }],
  };

  ngOnInit(): void {
  }
}
