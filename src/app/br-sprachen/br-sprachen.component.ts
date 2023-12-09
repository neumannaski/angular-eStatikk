import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-br-sprachen',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './br-sprachen.component.html',
  styleUrls: ['./br-sprachen.component.css']
})
export class BrSprachenComponent implements OnInit {

  ctx: any;
  config: any;
  chartDatalabels: any[] = [];
  wzData: any[] = [];
  fnData: any[] = [];
  pubgData: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getData('Call of Duty: Warzone');
    this.getData('Fortnite');
    this.getData('PUBG: BATTLEGROUNDS');

  }

  createChart(): void {
    this.ctx = document.getElementById('myChart1');
    this.config = {
      type: 'bar',
      data: {
        labels: this.chartDatalabels,
        datasets: [{
          label: 'Call of Duty: Warzone',
          data: this.wzData,
          backgroundColor: ['rgb(143,143,143)']
        },
        {
          label: 'Fortnite',
          data: this.fnData,
          backgroundColor: ['rgb(255,134,0)']
        },
        {
          label: 'PUBG: BATTLEGROUNDS',
          data: this.pubgData,
          backgroundColor: ['rgb(92,92,92)']
        }],
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            title: {
              color: '#e0e0e0',
            },
            ticks: {
              color: '#e0e0e0'
            }
          },
          y: {
            title: {
              color: '#e0e0e0'
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
    const myChart1 = new Chart(this.ctx, this.config);
  }

  getData(game: string): void {
    this.httpClient.get<any>(`http://127.0.0.1:5000/get_viewercount_per_language_by_game/${encodeURIComponent(game)}`).subscribe(
      (response: { viewercount: number; l: string; }[]) => {
        console.log(response);
        if (game == 'Call of Duty: Warzone') {
          this.wzData = [];
          this.chartDatalabels = [];
          response.forEach((entry: { viewercount: number; l: string; }) => {
            this.wzData.push(entry.viewercount);
            this.chartDatalabels.push(entry.l);
          });
        } else if (game == 'Fortnite') {
          response.forEach((entry: { viewercount: number; l: string; }) => {
            this.fnData.push(entry.viewercount);
          });
        } else if (game == 'PUBG: BATTLEGROUNDS') {
          response.forEach((entry: { viewercount: number; l: string; }) => {
            this.pubgData.push(entry.viewercount);
          }); this.createChart();
        }
      }
    );
  }
}
