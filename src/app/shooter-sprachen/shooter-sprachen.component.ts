import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shooter-sprachen',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './shooter-sprachen.component.html',
  styleUrls: ['./shooter-sprachen.component.css']
})
export class ShooterSprachenComponent implements OnInit {

  ctx: any;
  config: any;
  chartDatalabels: any[] = [];
  csgoData: any[] = [];
  valoData: any[] = [];
  ow2Data: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getData('Counter-Strike');
    this.getData('VALORANT');
    this.getData('Overwatch 2');

  }

  createChart(): void {
    this.ctx = document.getElementById('myChart1');
    this.config = {
      type: 'bar',
      data: {
        labels: this.chartDatalabels,
        datasets: [{
          label: 'Counter-Strike',
          data: this.csgoData,
          backgroundColor: ['rgb(143,143,143)']
        },
        {
          label: 'Valorant',
          data: this.valoData,
          backgroundColor: ['rgb(92,92,92)']
        },
        {
          label: 'Overwatch 2',
          data: this.ow2Data,
          backgroundColor: ['rgb(255,134,0)']
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
        if (game == 'Counter-Strike') {
          this.csgoData = [];
          this.chartDatalabels = [];
          response.forEach((entry: { viewercount: number; l: string; }) => {
            this.csgoData.push(entry.viewercount);
            this.chartDatalabels.push(entry.l);
          });
        } else if (game == 'VALORANT') {
          response.forEach((entry: { viewercount: number; l: string; }) => {
            this.valoData.push(entry.viewercount);
          });
        } else if (game == 'Overwatch 2') {
          response.forEach((entry: { viewercount: number; l: string; }) => {
            this.ow2Data.push(entry.viewercount);
          }); this.createChart();
        }
      }
    );
  }

}
