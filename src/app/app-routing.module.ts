import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FAQComponent} from "./faq/faq.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {GamesComponent} from "./games/games.component";
import {MobaCompareComponent} from './moba/moba-compare/moba-compare.component';
import {ShooterCompareComponent} from './shooter/shooter-compare/shooter-compare.component';
import {BrCompareComponent} from './br/br-compare/br-compare.component';
import {LpTournamentComponent} from "./lp/lp-tournament/lp-tournament.component";
import {LpTeamComponent} from "./lp/lp-team/lp-team.component";
import {LpPlayerComponent} from "./lp/lp-player/lp-player.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'moba', component: MobaCompareComponent},
  {path: 'shooter', component: ShooterCompareComponent},
  {path: 'br', component: BrCompareComponent},
  {path: 'tournaments', component: LpTournamentComponent},
  {path: 'teams', component: LpTeamComponent},
  {path: 'player', component: LpPlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
