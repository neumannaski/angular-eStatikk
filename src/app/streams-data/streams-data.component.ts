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
  selector: 'app-streams-data',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './streams-data.component.html',
  styleUrls: ['./streams-data.component.css']
})
export class StreamsDataComponent implements OnInit{

  streamer: Streamer[] | undefined;
  constructor(private httpClient: HttpClient){
  }
  ngOnInit():void{
    this.getData()
  }
    getData(){
      this.httpClient.get<any>('http://127.0.0.1:5000/get_current_top_streams_of_game/League%20of%20Legends').subscribe(
        response=>{
        console.log(response);
        this.streamer=response;
      })
    }
}