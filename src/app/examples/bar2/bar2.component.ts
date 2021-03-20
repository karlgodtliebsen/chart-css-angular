import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../chart/chart.component';

@Component({
  selector: 'app-bar2',
  templateUrl: './bar2.component.html',
  styleUrls: ['./bar2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Bar2Component implements OnInit {

  constructor() { }

  chartData: ChartData = {
    legends: [{text: 'Monthly Expenses', color: 'red'}],
    colors: ['red'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        rows: [
          {data: 'row1', value: 10, tooltip: 'tips 10', datacolor: 'blue'},
          {data: 'row2', value: 20, tooltip: 'tips 20', datacolor: 'yellow'},
          {data: 'row3', value: 30, tooltip: 'tips 30'},
          {data: 'row4', value: 40, tooltip: 'tips 40'},
          {data: 'row5', value: 50, tooltip: 'tips 50'},
          {data: 'row6', value: 60, tooltip: 'tips 60'},
          {data: 'row7', value: 70, tooltip: 'tips 70'},
          {data: 'row8', value: 80, tooltip: 'tips 80'},
          {data: 'row9', value: 90, tooltip: 'tips 90'},
          {data: 'row10', value: 100, tooltip: 'tips 100'},
          {data: 'row11', value: 110, tooltip: 'tips 110'},
          {data: 'row12', value: 120, tooltip: 'tips 120'},       ]
      }]
  };

  ngOnInit(): void {
  }


}
