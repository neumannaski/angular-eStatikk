import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

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
  ) {
  }
}

@Component({
  selector: 'app-shooter-feed-data',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './shooter-feed-data.component.html',
  styleUrls: ['./shooter-feed-data.component.css']
})
export class ShooterFeedDataComponent implements OnInit {

  csgoStreamer: Streamer[] | undefined;
  valoStreamer: Streamer[] | undefined;
  ow2Streamer: Streamer[] | undefined;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getData('Counter-Strike');
    this.getData('VALORANT');
    this.getData('Overwatch 2')
  }

  getData(game: string): void {
    const url = `http://127.0.0.1:5000/get_current_top_streams_of_game/${encodeURIComponent(game)}`;

    this.httpClient.get<any>(url).subscribe(
      response => {
        console.log(response);
        if (game == 'Counter-Strike') {
          this.csgoStreamer = response;
        } else if (game == 'VALORANT') {
          this.valoStreamer = response;
        } else if (game == 'Overwatch 2') {
          this.ow2Streamer = response;
        }
      });
  }
}
