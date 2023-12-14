import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Chart} from "chart.js";

@Component({
  selector: 'app-lp-team',
  templateUrl: './lp-team.component.html',
  styleUrls: ['./lp-team.component.css']
})
export class LpTeamComponent {
  chartData: number[] = []
  chartDataLabels: any[] = []
  ctx: any
  config: any
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const url = `http://127.0.0.1:5000/get_lp_team_data_by_game/League%20of%20Legends`;
    this.httpClient.get<any>(url).subscribe(
      response => {
        for (const res of response) {
          this.chartData.push(res.earnings)
          this.chartDataLabels.push(res.name)
        }
        this.ctx = document.getElementById('myChart');
        this.config = {
          type: 'dougnut',
          data: {
            labels: this.chartDataLabels,
            datasets: [{
              label: 'Earnings in US$ per Team',
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
