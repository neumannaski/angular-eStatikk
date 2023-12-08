import { Component, OnInit, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

export class Streamer {
  constructor(
    public viewercount: number,
    public name: string,
    public user_id: number,
    public title: string,
    public timestmp: string,
    public started_at: string,
    public profile_image_url: string,
    public followers: string
  ){
  }
}

@Component({
  selector: 'app-moba-feed-data',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './moba-feed-data.component.html',
  styleUrls: ['./moba-feed-data.component.css']
})
export class MobaFeedDataComponent implements OnInit{

  lolStreamer: Streamer[] | undefined;
  dota2Streamer: Streamer[] | undefined;

  constructor(private httpClient: HttpClient){
  }
  ngOnInit():void{
    this.getData('League of Legends');
    this.getData('Dota 2');
  }
    getData(game: string): void{
      const url = `http://127.0.0.1:5000/get_current_top_streams_of_game/${encodeURIComponent(game)}`;

      this.httpClient.get<any>(url).subscribe(
        response=>{
          console.log(response);
          if (game == 'League of Legends'){
            this.lolStreamer=response;
          } else if (game == 'Dota 2'){
        this.dota2Streamer=response;
      }
    });
}
}
