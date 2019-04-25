import { Component } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { videoInformation } from '../app/videoInformation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'videoApp';
  public video: string = '';
  public listOfVideos: videoInformation<any> = [];

  constructor(private youtubeApi: YoutubeService) { }

  ngOnInit(): void {
    this.getInicialList();
    this.fillVideoInfo();
  }

  searchVideo() {
    this.youtubeApi.getVideosByKeyWord(this.video).subscribe(res => {
      this.listOfVideos = res.items;
    });
  }

  getInicialList(){
    this.youtubeApi.getInicialVideos().subscribe(res => {
      this.listOfVideos = res.items;
    });
  }

  fillVideoInfo(){
    for (let i of this.listOfVideos) {
    }
  }

}
