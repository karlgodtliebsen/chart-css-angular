import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { ChartComponent } from './chart.component';


@NgModule({
  declarations: [
    ChartComponent,
  ],
  exports: [
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
})
export class ChartModule { }
