import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chart-demo',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css']
})
export class ChartDemoComponent implements OnInit {
  ctx: any;
  config: any;
  chartData: number[] = [];
  chartDatalabels: any[] = [];

  constructor(private httpClient: HttpClient){
  }
  ngOnInit() {
    this.getSprachen();
  }

  getSprachen() {
    this.httpClient.get<any>('http://127.0.0.1:5000/get_viewercount_per_language_by_game/League%20of%20Legends').subscribe(
      (      response: { viewercount: number; l: string; }[]) => {
        console.log(response);
        this.chartData = [];
        this.chartDatalabels = [];

        response.forEach((entry: { viewercount: number; l: string; }) => {
          this.chartData.push(entry.viewercount);
          this.chartDatalabels.push(entry.l);
        });

        // Chart-Konfiguration erst nach dem Empfang der Daten erstellen
        this.ctx = document.getElementById('myChart');
        this.config = {
          type: 'bar',
          data: {
            labels: this.chartDatalabels,
            datasets: [{
              label: 'Anzahl der Zuschauer',
              data: this.chartData,
              backgroundColor: '#ff8600',
            }],
          },
          options:{
            scales: {
              x: {
                title: {
                  color: '#e0e0e0',
                },
                ticks:{
                  color: '#e0e0e0'
                }
              },
              y: {
                title: {
                  color: '#e0e0e0',
                },
                ticks:{
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