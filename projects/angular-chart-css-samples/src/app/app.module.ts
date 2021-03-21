import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { Bar1Component } from './examples/bar1/bar1.component';
import { Line1Component } from './examples/line1/line1.component';
import { Bar2Component } from './examples/bar2/bar2.component';
import { Line3Component } from './examples/line3/line3.component';
import { Bar3Component } from './examples/bar3/bar3.component';
import { Bar4Component } from './examples/bar4/bar4.component';
import { Bar5Component } from './examples/bar5/bar5.component';
import { Line2Component } from './examples/line2/line2.component';
import { Area1Component } from './examples/area1/area1.component';
import { ChartModule} from '../../../angular-chart-css/src/lib';

@NgModule({
  declarations: [
    AppComponent,
    Bar1Component,
    Line1Component,
    Bar2Component,
    Line3Component,
    Bar3Component,
    Bar4Component,
    Bar5Component,
    Line2Component,
    Area1Component,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
