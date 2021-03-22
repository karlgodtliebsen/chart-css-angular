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
    legends: [{ text: '# Vaccinations' }, { text: '# Vaccinations' }, { text: '# Vaccinations' }],
    // labels: ['Asia', 'America', 'Europe'],
    datasets: [
      {
        rows: [
          { data: '10', value: 10, tooltip: 'tips 10' },
          { data: '20', value: 20, tooltip: 'tips 20', },
          { data: '30', value: 30, tooltip: 'tips 30' },
          { data: '40', value: 40, tooltip: 'tips 40' },
          { data: '50', value: 50, tooltip: 'tips 50' },
          { data: '60', value: 60, tooltip: 'tips 60' },
          { data: '70', value: 70, tooltip: 'tips 70' },
        ]
      }
      ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
