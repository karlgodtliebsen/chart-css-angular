import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartDataSet} from '../../chart/chart.component';

@Component({
  selector: 'app-line3',
  templateUrl: './line3.component.html',
  styleUrls: ['./line3.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Line3Component implements OnInit {

  constructor() { }
  labels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  datasets: ChartDataSet[] = [
    {
      rows: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      rows: [28, 48, 40, 19, 86, 27, 90],
    },
  ];

  ngOnInit(): void {
  }
}
