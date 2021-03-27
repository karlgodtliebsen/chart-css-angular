import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../../../../angular-chart-css/src/lib';

@Component({
  selector: 'app-stacked-bar-1',
  templateUrl: './stacked-bar1.component.html',
  styleUrls: ['./stacked-bar1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StackedBar1Component implements OnInit {

  constructor() { }
  chartData: ChartData = {
    datasets: [
      {
        label: {text: 'America', class: 'labelClass'},
        rows: [
          {data: '50$', value: 50, tooltip: 'tips 50$'},
          {data: '50$', value: 50, tooltip: 'tips 50$'},
          {data: '30$', value: 30, tooltip: 'tips 30$'},
          {data: '20$', value: 20, tooltip: 'tips 20$'},
        ]
      },
      {
        label: {text: 'Asia', class: 'labelClass'},
        rows: [
          {data: '30$', value: 30, tooltip: 'tips 30$'},
          {data: '30$', value: 30, tooltip: 'tips 30$'},
          {data: '30$', value: 30, tooltip: 'tips 30$'},
          {data: '30$', value: 30, tooltip: 'tips 30$'},
        ]
      },
      {
        label: {text: 'Europe', class: 'labelClass'},
        rows: [
          {data: '40$', value: 40, tooltip: 'tips 40$'},
          {data: '40$', value: 25, tooltip: 'tips 40$'},
          {data: '40$', value: 45, tooltip: 'tips 40$'},
          {data: '40$', value: 30, tooltip: 'tips 40$'},
        ]
      },
      {
        label: {text: 'Africa', class: 'labelClass'},
        rows: [
          {data: '20$', value: 20, tooltip: 'tips 20$'},
          {data: '20$', value: 20, tooltip: 'tips 20$'},
          {data: '20$', value: 20, tooltip: 'tips 20$'},
          {data: '20$', value: 20, tooltip: 'tips 20$'},
        ]
      }


      /*
      ['Continent','#1','#2','#3', '#4']
       */
    ]
  };
  ngOnInit(): void {
  }

}
