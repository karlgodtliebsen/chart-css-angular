import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { LineComponent } from './chart/line/line.component';
import { BarComponent } from './chart/bar/bar.component';
import { ColumnComponent } from './chart/column/column.component';
import { AreaComponent } from './chart/area/area.component';
import { DonutComponent } from './chart/donut/donut.component';
import { PieComponent } from './chart/pie/pie.component';
import { Bar1Component } from './examples/bar1/bar1.component';
import { Line1Component } from './examples/line1/line1.component';
import { Bar2Component } from './examples/bar2/bar2.component';
import { Line3Component } from './examples/line3/line3.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    LineComponent,
    BarComponent,
    ColumnComponent,
    AreaComponent,
    DonutComponent,
    PieComponent,
    Bar1Component,
    Line1Component,
    Bar2Component,
    Line3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
