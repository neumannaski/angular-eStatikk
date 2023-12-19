import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AvgtwitchdataComponent } from '../avgtwitchdata/avgtwitchdata.component';
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
  tournament_tabletimedata: any[] = []
  team_wholedata: any[] = []
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
        this.resetpage();
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

  async ngOnInit(): Promise<void> {
    this.selectedgames = this.localStorageService.getGames();
    await this.getData();
    await this.getTournamentprizepool();
    await this.getTournamentline();
    await this.getTournament();
    this.getTeamsEurope();
    this.getTeamsNorthamerica();
    this.getTeamsKorea();
    this.getalltopTeams();
  }

  getData(): void {
    const url = `http://127.0.0.1:5000/get_lp_tournament_data`;
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
            if(this.checkforgame(res.game_name)){
              this.tabledata.push({prizepool:res.prizepool,name:res.name,game_name:res.game_name,img:this.localStorageService.getimageofgame(res.game_name)})
            }
        }
      });
    const url1 = `http://127.0.0.1:5000/get_lp_tournament_data_startdate`;
    this.httpClient.get<any>(url1).subscribe(
      response => {
        for (const res of response) {
            if(this.checkforgame(res.game_name)){
              this.tournament_tabletimedata.push({prizepool:res.prizepool,name:res.name,game_name:res.game_name,img:this.localStorageService.getimageofgame(res.game_name),startdate:res.startdate,enddate:res.enddate})
            }
        }
      });
      const url2 = `http://127.0.0.1:5000/get_lp_team_data`;
    this.httpClient.get<any>(url2).subscribe(
      response => {
        for (const res of response) {
          if(this.checkforgame(res.game_name)){
            this.team_wholedata.push({name:res.name, earnings:res.earnings,region:res.region,img:this.localStorageService.getimageofregion(res.region),img_game:this.localStorageService.getimageofgame(res.game_name)})
          }
          }
      });
  }

  async getTournamentline(): Promise<void> {
    var gamelabel: any[]=[];
    const url = `http://127.0.0.1:5000/get_lp_tournament_data_startdate`;
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of this.tournament_tabletimedata) {
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
        for (const tabledataset of this.tournament_tabletimedata) {
          if(tabledataset.game_name==game.name){
            gamedata.push(tabledataset.prizepool);
              gamecolor=this.localStorageService.getgamecolor(game.name)
          }else{
            gamedata.push(NaN);
          }
        }
        if(this.checkforgame(game.name)){
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
            
          gamecolor.push("orange")
            
        }else{

        }
      }
    }
    gamedatasets.push({
      label: 'Preisgeld in $', 
      data: gamedata,
      backgroundColor: gamecolor
  })
    return gamedatasets
  }

  getTournamentprizepool(): void {
    const url = `http://127.0.0.1:5000/get_lp_tournament_prizepool`;
    var gamedata: any[]=[];
    var gamelabel: any[]=[];
    var gamecolor: any[]=[];
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
          if(this.checkforgame(res.game_name)){
            gamedata.push(res.prizepool)
            gamelabel.push(res.game_name)
            gamecolor.push(this.localStorageService.getgamecolor(res.game_name));
          }
          
        }
        this.ctx = document.getElementById('tournamentpie');
        this.config = {
          type: 'doughnut',
          data: {
            labels: gamelabel,
            datasets: [{
              label: 'Anzahl der Zuschauer',
              data: gamedata,
              backgroundColor: gamecolor,
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

  getalltopTeams(): void {
    const url = `http://127.0.0.1:5000/get_top_teams_data`;
    var teamdata: any[]=[];
    var teamlabel: any[]=[];
    var teamcolor: any[]=[];
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
          console.log(res)
          if(this.checkforgame(res.game_name)){
            teamlabel.push(res.name);
            teamdata.push(res.earnings);
            teamcolor.push(this.localStorageService.getteamcolor(res.name));
            console.log(res)
          }
        }
        this.ctx = document.getElementById('topteams');
        this.config = {
          type: 'bar',
          data: {
            labels: teamlabel,
            datasets: [{
              label: 'Total earnings',
              data: teamdata,
              backgroundColor: teamcolor,
              borderColor: teamcolor,
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
        const topteams = new Chart(this.ctx, this.config);
        
      });
  }

  getTeamsEurope(): void {
    const url = `http://127.0.0.1:5000/get_team_data_by_region/Europe`;
    var teamdata: any[]=[];
    var teamlabel: any[]=[];
    var teamcolor: any[]=[];
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
          if(this.checkforgame(res.game_name)){
            teamdata.push(res.earnings)
            teamlabel.push(res.name)
            teamcolor.push(this.localStorageService.getteamcolor(res.name))
          }
        }
        this.ctx = document.getElementById('europeteampie');
        this.config = {
          type: 'pie',
          data: {
            labels: teamlabel,
            datasets: [{
              label: 'Total earnings',
              data: teamdata,
              backgroundColor: teamcolor,
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
        const europeteampie = new Chart(this.ctx, this.config);
        
      });
  }
  getTeamsNorthamerica(): void {
    const url = `http://127.0.0.1:5000/get_team_data_by_region/North America`;
    var teamdata: any[]=[];
    var teamlabel: any[]=[];
    var teamcolor: any[]=[];
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
          if(this.checkforgame(res.game_name)){
            teamdata.push(res.earnings)
            teamlabel.push(res.name)
            teamcolor.push(this.localStorageService.getteamcolor(res.name))
          }
        }
        this.ctx = document.getElementById('northamericapie');
        this.config = {
          type: 'doughnut',
          data: {
            labels: teamlabel,
            datasets: [{
              label: 'Total earnings',
              data: teamdata,
              backgroundColor: teamcolor,
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
        const northamericapie = new Chart(this.ctx, this.config);
        
      });
  }
  getTeamsKorea(): void {
    const url = `http://127.0.0.1:5000/get_team_data_by_region/Korea`;
    var teamdata: any[]=[];
    var teamlabel: any[]=[];
    var teamcolor: any[]=[];
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
          if(this.checkforgame(res.game_name)){
            teamdata.push(res.earnings)
            teamlabel.push(res.name)
            teamcolor.push(this.localStorageService.getteamcolor(res.name))
          }
        }
        this.ctx = document.getElementById('Koreapie');
        this.config = {
          type: 'doughnut',
          data: {
            labels: teamlabel,
            datasets: [{
              label: 'Total earnings',
              data: teamdata,
              backgroundColor: teamcolor,
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
        const Koreapie = new Chart(this.ctx, this.config);
        
      });
  }
 resetpage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation ='reload';
    this.router.navigate(['./'], {relativeTo: this.route, queryParamsHandling:"merge"})
 }
}
