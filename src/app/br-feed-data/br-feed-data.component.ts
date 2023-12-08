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
  selector: 'app-br-feed-data',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './br-feed-data.component.html',
  styleUrls: ['./br-feed-data.component.css']
})
export class BrFeedDataComponent implements OnInit{

  wzStreamer: Streamer[] | undefined;
  fnStreamer: Streamer[] | undefined;
  pubgStreamer: Streamer[] | undefined;

  constructor(private httpClient: HttpClient){
  }
  ngOnInit():void{
    this.getData('Call of Duty: Warzone');
    this.getData('Fortnite');
    this.getData('PUBG: BATTLEGROUNDS')
  }
    getData(game: string): void{
      const url = `http://127.0.0.1:5000/get_current_top_streams_of_game/${encodeURIComponent(game)}`;

      this.httpClient.get<any>(url).subscribe(
        response=>{
          console.log(response);
          if (game == 'Call of Duty: Warzone'){
            this.wzStreamer=response;
          } else if (game == 'Fortnite'){
        this.fnStreamer=response;
      } else if (game== 'PUBG: BATTLEGROUNDS'){
        this.pubgStreamer=response;
      }
    });
}
}
