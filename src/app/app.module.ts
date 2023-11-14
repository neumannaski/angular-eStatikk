import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';

import {Chart} from 'chart.js';
import { registerables } from 'chart.js';
import { MultiBarColumnComponent } from './multi-bar-column/multi-bar-column.component';
import { StreamsDataComponent } from './streams-data/streams-data.component';

Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    ChartDemoComponent,
    MultiBarColumnComponent,
    StreamsDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
