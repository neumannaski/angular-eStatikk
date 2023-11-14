import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css']
})
export class ChartDemoComponent {

  ctx : any;
  config : any;
  chartData : number[] = [];
  chartDatalabels : any[] = [];
  
    ngOnInit(){
  
      this.chartData.push(81000);
      this.chartData.push(17000);
      this.chartData.push(36000);
  
      this.chartDatalabels.push('Riot Games');
      this.chartDatalabels.push('Summoners Inn');
      this.chartDatalabels.push('Tolkin');
  
      this.ctx = document.getElementById('myChart');
      this.config = {
        type : 'bar',
        options : {
          scales: {
            x: [{
              ticks: {
                fontColor: 'red'
              }
            }],
            y:[{
              ticks: {
                fontColor: 'red'
              }
            }]
          }
        },
        data : {
          labels : this.chartDatalabels,
          datasets : [{ 
            label: 'Viewerzahlen 11.11.23',
            data: this.chartData,
            borderWidth: 3,
            borderColor: ['rgb(135,201,28)', 'rgb(212,22,222)','rgb(22,216,223)'],
            backgroundColor: ['rgb(135,201,28)', 'rgb(212,22,222)','rgb(22,216,223)'],
           
        }],
        }
      }
      const myChart = new Chart(this.ctx, this.config);
    }

}
