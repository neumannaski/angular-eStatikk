import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChartDemoComponent} from './chart-demo/chart-demo.component';

import {Chart} from 'chart.js';
import {registerables} from 'chart.js';
import {MultiBarColumnComponent} from './multi-bar-column/multi-bar-column.component';
import {StreamsDataComponent} from './streams-data/streams-data.component';
import {HttpClientModule} from '@angular/common/http';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {HomeComponent} from './home/home.component';
import {FAQComponent} from './faq/faq.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {NgOptimizedImage} from "@angular/common";
import {GamesComponent} from "./games/games.component";
import {BrCompareComponent} from './br-compare/br-compare.component';
import {BrFeedDataComponent} from './br-feed-data/br-feed-data.component';
import {MobaCompareComponent} from './moba-compare/moba-compare.component';
import {MobaFeedDataComponent} from './moba-feed-data/moba-feed-data.component';
import {ShooterCompareComponent} from './shooter-compare/shooter-compare.component';
import {ShooterFeedDataComponent} from './shooter-feed-data/shooter-feed-data.component';
import { BrSprachenComponent } from './br-sprachen/br-sprachen.component';
import { MobaSprachenComponent } from './moba-sprachen/moba-sprachen.component';
import { ShooterSprachenComponent } from './shooter-sprachen/shooter-sprachen.component';


Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    //MultiBarColumnComponent,
    HomeComponent,
    FAQComponent,
    AboutComponent,
    ContactComponent,
    GamesComponent,
    BrCompareComponent,

    MobaCompareComponent,

    ShooterCompareComponent,
     AppComponent,
    HomeComponent,
    MobaCompareComponent,
    BrCompareComponent,
    ShooterCompareComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StreamsDataComponent,
    HttpClientModule,
    ChartDemoComponent,
    BrFeedDataComponent,
    ShooterFeedDataComponent,
    MobaFeedDataComponent,
    PieChartComponent,
    NgOptimizedImage,
    BrSprachenComponent,
    MobaSprachenComponent,
    ShooterSprachenComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
