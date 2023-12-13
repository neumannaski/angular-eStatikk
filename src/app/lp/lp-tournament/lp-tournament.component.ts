import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router'
import {Chart} from "chart.js";
import { LocalstorageComponent } from '../localstorage/localstorage.component';




@Component({
  selector: 'app-lp-tournament',
  templateUrl: './lp-tournament.component.html',
  styleUrls: ['./lp-tournament.component.css']
})

export class LpTournamentComponent implements OnInit {
  chartData: number[] = []
  chartDataLabels: any[] = []
  chartDataIcons: any[] = []
  tabledata: any[] = []
  tabletimedata: any[] = []
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
    console.log(name, ischecked)
  }

  checkforgame(gamename:string): Boolean{
    for (const game of this.selectedgames) {
      if (game.name == gamename&& game.selected==true) {
        return true
      }
    }
    console.log(this.selectedgames)
    return false
  }

  async ngOnInit(): Promise<void> {
    this.selectedgames = this.localStorageService.getGames();
    await this.getData();
    await this.getTournamentprizepool();
    await this.getTournamentline();
    await this.getTournament();
    
  }

  getData(): void {
    const url = `http://127.0.0.1:5000/get_lp_tournament_data`;
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
            if(this.checkforgame(res.game_name)){
              this.tabledata.push(res)
            }
        }
      });
    const url1 = `http://127.0.0.1:5000/get_lp_tournament_data_startdate`;
    this.httpClient.get<any>(url1).subscribe(
      response => {
        for (const res of response) {
            if(this.checkforgame(res.game_name)){
              this.tabletimedata.push(res)
            }
        }
      });
  }

  async getTournamentline(): Promise<void> {
    var gamelabel: any[]=[];
    const url = `http://127.0.0.1:5000/get_lp_tournament_data_startdate`;
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of this.tabletimedata) {
          gamelabel.push(res.startdate)
        }
        
        this.ctx = document.getElementById('linechart_tournament');
        this.config = {
          type: 'line',
          data: {
            labels: gamelabel,
            datasets: this.gettournamenttimedataset()
          },
          options: {
            layout: {
              paddding:{
                  left:30
              }
            },
            indexAxis: 'x',
            scales: {
              y: {
                title: {
                  color: '#e0e0e0',
                },
                ticks: {
                  color: '#e0e0e0'
                }
              },
              x: {
                title: {
                  color: '#e0e0e0',
                },
                ticks: {
                  color: '#e0e0e0'
                }
              }
            },
            plugins: {
              legend: {
                labels: {
                  color: '#e0e0e0'
                }
              }
            }
          }

        };
        const linechart_tournament = new Chart(this.ctx, this.config);
      });
    }

  gettournamenttimedataset(): any {
      var gamedatasets: any[]=[];
      var gamecolor: string='';
      for (const game of this.selectedgames) {
      var gamedata: any[]=[];
        for (const tabledataset of this.tabletimedata) {
          if(tabledataset.game_name==game.name){
            gamedata.push(tabledataset.prizepool);
              if(game.name=='Dota 2'){
                gamecolor ="rgb(255,92,92)"
              }else if (game.name=='League of Legends'){
                gamecolor="rgb(92,92,255)"
              }
          }else{
            gamedata.push(NaN);
          }
        }
        if(this.checkforgame(game.name)){
          console.log(game.name)
          gamedatasets.push({
          label: game.name, 
          data: gamedata,
          backgroundColor: gamecolor,
          borderColor: gamecolor,
          spanGaps: true,
          
      })
        }
      }
      return gamedatasets
    }

  gettournamentdataset(): any {
    var index: number = 0;
    var first_gamename: number = 0;
    var gamedatasets: any[]=[];
    var gamedata: any[]=[];
    var gamecolor: any[]=[];
    for (const game of this.selectedgames) {
      for (const tabledataset of this.tabledata) {
        if(tabledataset.game_name==game.name){
          gamedata.push(tabledataset.prizepool);
            if(index==0){
              first_gamename=game.name
            }
            if(game.name=='Dota 2'){
              gamecolor.push("rgb(255,92,92)")
            }else if (game.name=='League of Legends'){
              gamecolor.push("rgb(92,92,255)")
            }
        }else{

        }
      }
      if(index>=1){
        if(this.checkforgame(game.name)){
          gamedatasets.push({
            label:game.name,
            backgroundColor: ["rgb(92,92,255)"]
         })
        }
      }
      index+=1;
    }
    gamedatasets.push({
      label: first_gamename, 
      data: gamedata,
      backgroundColor: gamecolor
  })
    return gamedatasets
  }

  getTournamentprizepool(): void {
    const url = `http://127.0.0.1:5000/get_lp_tournament_prizepool`;
    var gamedata: any[]=[];
    var gamelabel: any[]=[];
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
          gamedata.push(res.prizepool)
          gamelabel.push(res.game_name)
        }
        this.ctx = document.getElementById('tournamentpie');
        this.config = {
          type: 'doughnut',
          data: {
            labels: gamelabel,
            datasets: [{
              label: 'Anzahl der Zuschauer',
              data: gamedata,
              backgroundColor: ['rgb(255,92,92)','rgb(92,92,255)'],
              hoverOffset: 4
            }]
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
        const tournamentpie = new Chart(this.ctx, this.config);
        
      });

  }

  getTournament(): void {
    const url = `http://127.0.0.1:5000/get_lp_tournament_data_by_game/League%20of%20Legends`;
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of this.tabledata) {
          this.chartData.push(res.prizepool)
          this.chartDataLabels.push(res.name)
        }
        this.ctx = document.getElementById('myChart');
        this.config = {
          type: 'bar',
          data: {
            labels: this.chartDataLabels,
            datasets: this.gettournamentdataset()
          },
          options: {
            layout: {
              paddding:{
                  left:30
              }
            },
            indexAxis: 'y',
            scales: {
              y: {
                title: {
                  color: '#e0e0e0',
                },
                ticks: {
                  color: '#e0e0e0'
                }
              },
              x: {
                title: {
                  color: '#e0e0e0',
                },
                ticks: {
                  color: '#e0e0e0'
                }
              }
            },
            plugins: {
              legend: {
                labels: {
                  color: '#e0e0e0'
                }
              }
            }
          }

        };
        const myChart = new Chart(this.ctx, this.config);
        
      });

  }
  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   console.log("Current route I am on:",this.router.url);
   const url=self ? this.router.url :urlToNavigateTo;
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
       console.log(`After navigation I am on:${this.router.url}`)
     })
   })
 }
 resetpage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation ='reload';
    this.router.navigate(['./'], {relativeTo: this.route, queryParamsHandling:"merge"})
 }
}
