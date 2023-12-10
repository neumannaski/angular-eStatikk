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
import {BrCompareComponent} from './br/br-compare/br-compare.component';
import {BrFeedDataComponent} from './br/br-feed-data/br-feed-data.component';
import {MobaCompareComponent} from './moba/moba-compare/moba-compare.component';
import {MobaFeedDataComponent} from './moba/moba-feed-data/moba-feed-data.component';
import {ShooterCompareComponent} from './shooter/shooter-compare/shooter-compare.component';
import {ShooterFeedDataComponent} from './shooter/shooter-feed-data/shooter-feed-data.component';
import {BrSprachenComponent} from './br/br-sprachen/br-sprachen.component';
import {MobaSprachenComponent} from './moba/moba-sprachen/moba-sprachen.component';
import {ShooterSprachenComponent} from './shooter/shooter-sprachen/shooter-sprachen.component';
import {LpTournamentComponent} from './lp/lp-tournament/lp-tournament.component';
import {LpTeamComponent} from './lp/lp-team/lp-team.component';
import {LpPlayerComponent} from './lp/lp-player/lp-player.component';


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
    LpTournamentComponent,
    LpTeamComponent,
    LpPlayerComponent,


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
