import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../chart/chart.component';

@Component({
  selector: 'app-bar4',
  templateUrl: './bar4.component.html',
  styleUrls: ['./bar4.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Bar4Component implements OnInit {

  chartData: ChartData = {
    legends: [{text: 'Monthly Expenses', color: 'red'}],
    colors: ['red'],
     labels: ['Year', 'Progress 1', 'Progress 2', 'Progress 3', 'Progress 4', 'Progress 5'],
    // headers: ['2010', '2020'],
    datasets: [
      {
       // header: '2010',
        rows: [
          {data: '10', value: 10, tooltip: 'tips 10'},
          {data: '30', value: 30, tooltip: 'tips 30'},
          {data: '50', value: 50, tooltip: 'tips 50'},
          {data: '70', value: 70, tooltip: 'tips 70'},
        ]
      },
      {
       // header: '2010',
        rows: [
          {data: '20', value: 20, tooltip: 'tips 20'},
          {data: '40', value: 40, tooltip: 'tips 40'},
          {data: '60', value: 60, tooltip: 'tips 60'},
          {data: '80', value: 80, tooltip: 'tips 80'},
          {data: '100', value: 100, tooltip: 'tips 100'},
        ]
      }]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
