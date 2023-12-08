import { Component, OnInit, OnChanges, SimpleChange, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges{
  @Input() genre: string = '';
  ctx: any;
  config: any;
  chartSpielaufteilungData: number[] = [];
  chartSpielaufteilungabels: any[] = [];

  constructor(private httpClient: HttpClient){
  }
  ngOnInit() {
    this.getSpieleaufteilung();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['genre']){
      this.getSpieleaufteilung();
    }
  }

  getSpieleaufteilung() {
    this.httpClient.get<any>(`http://127.0.0.1:5000/get_total_viewercount_per_genre/${encodeURIComponent(this.genre)}`).subscribe(
      (   response: { viewercount: number; name: string; }[] ) => {
        console.log(response);
        this.chartSpielaufteilungData = [];
        this.chartSpielaufteilungabels = [];

        response.forEach((entry: { viewercount: number; name: string;}) => {
          this.chartSpielaufteilungData.push(entry.viewercount);
          this.chartSpielaufteilungabels.push(entry.name);
        });

        this.ctx = document.getElementById('myChart2');
        this.config = {
          type: 'pie',
          data: {
            labels: this.chartSpielaufteilungabels,
            datasets: [{
              label: 'Anzahl der Zuschauer',
              data: this.chartSpielaufteilungData,
              backgroundColor: ['#8f8f8f','#ff8600','#5c5c5c'],
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
        const myChart2 = new Chart(this.ctx, this.config);
      }
    );
  }
}
