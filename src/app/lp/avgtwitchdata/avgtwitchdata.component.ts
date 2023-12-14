import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router'
import {Chart} from "chart.js";
import { LocalstorageComponent } from '../localstorage/localstorage.component';

@Component({
  selector: 'app-avgtwitchdata',
  templateUrl: './avgtwitchdata.component.html',
  styleUrls: ['./avgtwitchdata.component.css']
})
export class AvgtwitchdataComponent {

  days: number=100
  chartData: any[] = []
  chartDataLabels: any[] = []
  chartDataIcons: any[] = []
  selectedgames: any[] = []
  ctx: any
  config: any
  constructor(private httpClient: HttpClient,public router:Router, private route:ActivatedRoute, public localStorageService:LocalstorageComponent ) {
    
  }

  onchangegame($event: any){
    const name = $event.target.value;
    const ischecked = $event.target.checked;
    for (const game of this.selectedgames) {
      if (game.name == name) {
        game.selected = ischecked
        this.localStorageService.setGames(this.selectedgames);
        this.resetpage()
      }
    }
  }

  checkforgame(gamename:string): Boolean{
    for (const game of this.selectedgames) {
      if (game.name == gamename&& game.selected==true) {
        return true
      }
    }
    return false
  }

  ngOnInit(): void {
    this.selectedgames = this.localStorageService.getGames();
    this.getData();
    this.getTournamentline();
    
  }

  getData(): void {
    const url = `http://127.0.0.1:5000/get_all_avg_twitchviewer_over_time/`+this.days;
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
            if(this.checkforgame(res.game_name)){
              this.chartData.push({day: res.tag, game_name: res.game_name, viewer: res.durchschnittszuschauer})
            }
        }
      });
  }

 getTournamentline(): void {
  const url = `http://127.0.0.1:5000/get_all_avg_twitchviewer_over_time/`+this.days;
    var gamelabel: any[]=[];
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
          if(res.game_name=='League of Legends')
            gamelabel.push(res.tag)
        }
        this.ctx = document.getElementById('linechart_twitch_viewer');
        this.config = {
          type: 'line',
          data: {
            labels: gamelabel,
            datasets: this.gettournamenttimedataset()
          },
          options:{
            plugins: {
              legend:{
                labels: {
                  color: '#e0e0e0'
                }
              }
            }
          }
        };
        const linechart_twitch_viewer = new Chart(this.ctx, this.config);
      });
    
    }

  gettournamenttimedataset(): any {
      var gamedatasets: any[]=[];
      for (const game of this.selectedgames) {
      var gamedata: any[]=[];
        for (const tabledataset of this.chartData) {
          if(tabledataset.game_name==game.name){
            gamedata.push(tabledataset.viewer);
          }
        }
        if(this.checkforgame(game.name)){
          
          gamedatasets.push({
          label: game.name, 
          data: gamedata,
          backgroundColor: this.localStorageService.getgamecolor(game.game_name),
          borderColor: this.localStorageService.getgamecolor(game.game_name),
          spanGaps: true,
      })
        }
      }
      return gamedatasets
    }

    resetpage(){
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation ='reload';
      this.router.navigate(['./'], {relativeTo: this.route, queryParamsHandling:"merge"})
   }
  }

