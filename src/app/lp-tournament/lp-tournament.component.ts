import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Chart} from "chart.js";


export class Streamer {
  constructor(
    public startdate: Date,
    public enddate: Date,
    public name: string,
    public participants: number
  ) {
  }
}

@Component({
  selector: 'app-lp-tournament',
  templateUrl: './lp-tournament.component.html',
  styleUrls: ['./lp-tournament.component.css']
})

export class LpTournamentComponent implements OnInit {
  chartData: number[] = []
  chartDataLabels: any[] = []
  ctx: any
  config: any
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getTournament();
  }

  getTournament(): void {
    const url = `http://127.0.0.1:5000/get_lp_tournament_data_by_game/League%20of%20Legends`;
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
          console.log(res)
          this.chartData.push(res.prizepool)
          this.chartDataLabels.push(res.name)
        }
        this.ctx = document.getElementById('myChart');
        this.config = {
          type: 'bar',
          data: {
            labels: this.chartDataLabels,
            datasets: [{
              label: 'Prizepool in US$',
              data: this.chartData,
              backgroundColor: '#ff8600',
            }],
          },
          options: {
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
}
