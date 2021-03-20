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
    legends: [{text: 'Monthly Expenses', color: 'rgb(0,0,0,0.3)'}],
    colors: ['rgb(0,0,0,0.3)'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        rows: [
          {data: '1', value: 10, tooltip: 'tips 10', datacolor: 'blue'},
          {data: '2', value: 20, tooltip: 'tips 20', datacolor: 'yellow'},
          {data: '3', value: 30, tooltip: 'tips 30', color: 'orange'},
          {data: '4', value: 40, tooltip: 'tips 40'},
          {data: '5', value: 50, tooltip: 'tips 50'},
          {data: '6', value: 60, tooltip: 'tips 60'},
          {data: '7', value: 70, tooltip: 'tips 70'},
          {data: '8', value: 80, tooltip: 'tips 80'},
          {data: '9', value: 90, tooltip: 'tips 90'},
          {data: '10', value: 100, tooltip: 'tips 100'},
          {data: '11', value: 110, tooltip: 'tips 110'},
          {data: '12', value: 120, tooltip: 'tips 120'},       ]
      }]
  };

  ngOnInit(): void {
  }


}
