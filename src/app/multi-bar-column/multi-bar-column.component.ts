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

    ngOnInit():void{
    //  this.getData('League of Legends');
      //this.getData('Dota 2');
    }
   //   getData(game: string):void{
     //   const url = `http://127.0.0.1:5000/get_viewercount_per_language_by_game/${encodeURIComponent(game)}`;
       // this.httpClient.get<any>(url).subscribe(
         // response=>{
           // cons
          //}
        //)

      }
      //const myChart1 = new Chart(this.ctx, this.config);
 //  }


//S}
