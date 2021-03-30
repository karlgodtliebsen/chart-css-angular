import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartData} from '../../../../../angular-chart-css/src/lib';

@Component({
  selector: 'app-line-4',
  templateUrl: './line4.component.html',
  styleUrls: ['./line4.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Line4Component implements OnInit {

  constructor() { }


  chartData: ChartData = {
      datasets: [
      {
        rows: [
          {x: 2009, y: 3000},
          {x: 2010, y: 3900},
          {x: 2011, y: 4100},
          {x: 2012, y: 7500},
          {x: 2013, y: 8700},
          {x: 2014, y: 10500},
          {x: 2015, y: 10900},
          {x: 2016, y: 13000},
          {x: 2017, y: 11900},
          {x: 2018, y: 13000},
          {x: 2019, y: 17900},
        ]
      }]
  };

  ngOnInit(): void {
  }

}
