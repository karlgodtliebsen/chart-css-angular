import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../../../../angular-chart-css/src/lib';

@Component({
  selector: 'app-horizontal-bar-1',
  templateUrl: './horizontal-bar1.component.html',
  styleUrls: ['./horizontal-bar1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HorizontalBar1Component implements OnInit {

  chartData: ChartData = {
    datasets: [
      {
        rows: [
          { data: '0.2', value: 0.2, tooltip: 'tips 0.2' },
          { data: '0.4', value: 0.4, tooltip: 'tips 0.4', },
          { data: '0.6', value: 0.6, tooltip: 'tips 0.6' },
          { data: '0.8', value: 0.8, tooltip: 'tips 0.8' },
          { data: '1.0', value: 1.0, tooltip: 'tips 1.0' },
        ]
      }
      ]
  };

  chartDataLabels: ChartData = {
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        rows: [
          { data: '0.2', value: 0.2, tooltip: 'tips 0.2' },
          { data: '0.4', value: 0.4, tooltip: 'tips 0.4', },
          { data: '0.6', value: 0.6, tooltip: 'tips 0.6' },
          { data: '0.8', value: 0.8, tooltip: 'tips 0.8' },
          { data: '1.0', value: 1.0, tooltip: 'tips 1.0' },
        ]
      }
    ]
  };

  chartDataMultiple: ChartData = {
    datasets: [
      {
        rows: [
          { data: '0.2', value: 0.2, tooltip: 'tips 0.2' },
          { data: '0.4', value: 0.4, tooltip: 'tips 0.4', },
          { data: '0.6', value: 0.6, tooltip: 'tips 0.6' },
          { data: '0.8', value: 0.8, tooltip: 'tips 0.8' },
          { data: '1.0', value: 1.0, tooltip: 'tips 1.0' },
        ]
      },
      {
        rows: [
          { data: '0.2', value: 0.2, tooltip: 'tips 0.2' },
          { data: '0.4', value: 0.4, tooltip: 'tips 0.4', },
          { data: '0.6', value: 0.6, tooltip: 'tips 0.6' },
          { data: '0.8', value: 0.8, tooltip: 'tips 0.8' },
          { data: '1.0', value: 1.0, tooltip: 'tips 1.0' },
        ]
      }
    ]
  };


  constructor() {
  }

  ngOnInit(): void {
  }

}
