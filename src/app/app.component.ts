import {Component} from '@angular/core';
import {ChartData, ChartDataSet} from './chart/chart.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-chartcss';

  chartData1: ChartData = {
    legends: [{text: 'legend 1', color: 'red'}, {text: 'legend 2'}, {text: 'legend 3'}],
   // colors: ['red', 'blue', 'green'],
    labels: ['Asia', 'America' , 'Europe'],
    datasets: [
      {
        rows: [
          {data: 'row1', value: 10, tooltip: 'tips 10', datacolor: 'white'},
          {data: 'row2', value: 20, tooltip: 'tips 20', datacolor: 'yellow'},
          {data: 'row3', value: 30, tooltip: 'tips 30'},
          {data: 'row4', value: 40, tooltip: 'tips 40'},
          {data: 'row5', value: 50, tooltip: 'tips 50'},
          {data: 'row6', value: 60, tooltip: 'tips 60'},
          {data: 'row7', value: 70, tooltip: 'tips 70'},
        ]
      },
      {
        rows: [
          {data: 'row1', value: 1, tooltip: 'tips 1', datacolor: 'white'},
          {data: 'row2', value: 2, tooltip: 'tips 2', datacolor: 'yellow'},
          {data: 'row3', value: 3, tooltip: 'tips 3'},
          {data: 'row4', value: 4, tooltip: 'tips 4'},
          {data: 'row5', value: 5, tooltip: 'tips 5'},
          {data: 'row6', value: 6, tooltip: 'tips 6'},
          {data: 'row7', value: 7, tooltip: 'tips 7'},
        ]
      },
      {
        rows: [
          {data: 'row1', value: 100, tooltip: 'tips 100', datacolor: 'white'},
          {data: 'row2', value: 200, tooltip: 'tips 200', datacolor: 'yellow'},
          {data: 'row3', value: 300, tooltip: 'tips 300'},
          {data: 'row4', value: 400, tooltip: 'tips 400'},
          {data: 'row5', value: 500, tooltip: 'tips 500'},
          {data: 'row6', value: 600, tooltip: 'tips 600'},
          {data: 'row7', value: 700, tooltip: 'tips 700'},
        ],
      }],
  };

  chartData2: ChartData = {
    legends: [{text: 'Monthly Expenses', color: 'red'}],
    colors: ['red'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        rows: [
          {data: 'row1', value: 10, tooltip: 'tips 10', datacolor: 'white'},
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


}

// labels: [{text: 'label 1', color: 'red'}, {text: 'label 2'}, {text: 'label 3'} , {text: 'label 4'}]
