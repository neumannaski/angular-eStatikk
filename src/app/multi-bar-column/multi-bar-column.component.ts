import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-multi-bar-column',
  templateUrl: './multi-bar-column.component.html',
  styleUrls: ['./multi-bar-column.component.css']
})
export class MultiBarColumnComponent {

  ctx : any;
  config : any;
  chartDatalabels : any[] = [];
  
    ngOnInit(){
  
      this.chartDatalabels.push('11.11.');
      this.chartDatalabels.push('12.11.');
      this.chartDatalabels.push('13.11.');
  
      this.ctx = document.getElementById('myChart1');

      this.config = {
        type : 'bar',
        data : {
          labels : this.chartDatalabels,
          datasets : [{ 
            label: 'Riot Games',
            data: [8,2,3],
            backgroundColor:['rgb(135,201,28)']
          },
          { 
            label: 'Summoners Inn',
            data: [5,4,6],
            backgroundColor: ['rgb(212,22,222)']
          },
        { 
          label: 'Tolkin',
          data: [8,5,9],
          backgroundColor: ['rgb(22,216,223)']
        }
      ],
        options : {
          scales: {
            x: {
                grid: {
                  offset: false
                }
            },
            y: {
              grid: {
                offset: false
              }
          }
        }
        }
        }
      }
      const myChart1 = new Chart(this.ctx, this.config);
    }
    

}
