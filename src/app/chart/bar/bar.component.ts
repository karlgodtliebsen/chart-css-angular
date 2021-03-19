import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSet} from '../chart.component';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  // data
  @Input() dataset: ChartDataSet;


  constructor() { }

  ngOnInit(): void {
  }

}
