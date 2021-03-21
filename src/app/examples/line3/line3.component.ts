import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../chart/models';

@Component({
  selector: 'app-line-3',
  templateUrl: './line3.component.html',
  styleUrls: ['./line3.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Line3Component implements OnInit {

  chartDataSet: ChartData = {
    // legends: [{text: '2000'}, {text: '2010'}, {text: '2020'}],
    legends: [ '2000',  '2010',  '2020'],
    max: 100,
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
    {
      label: '2000',
      // tslint:disable-next-line:max-line-length
      rows: [{start: 10, value: 50.0, tooltip: 'starting', data: 'data'}, {start: 0, value: 20.0}, {start: 20, value: 40}, {value: 45}, {value: 55}, {value: 55}, {value: 40}],
    },
    {
      label: '2010',
      rows: [{start: 50, value: 80}, {start: 80, value: 50}, {start: 50, value: 10}, {value: 32}, {value: 86}, {value: 90}, {value: 60}],
    },
    {
      label: '2020',
      rows: [{start: 80, value: 40}, {start: 40, value: 30}, {start: 30, value: 20}, {value: 19}, {value: 65}, {value: 50}, {value: 90}],
    },
  ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
