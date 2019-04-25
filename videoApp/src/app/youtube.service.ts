import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public url = 'https://www.googleapis.com/youtube/v3/search';
  public key = 'AIzaSyDDoOUciO14igdAoHzwwpSZJzzDBmYg7n4';

  constructor(private http: HttpClient) { }

  /** YouTube features to our application, ability to upload videos
   * @param video The video specifies the query term to be searched. (name of the video)
   */
  getVideosByKeyWord(video: string): Observable<any> {
    let uri = `${this.url}?
                part=snippet
                &maxResults=6
                &q=${video}
                &type=video
                &order=relevance
                &key=${this.key}`; 
    return this.http.get<any>(uri);
  }

  getInicialVideos(): Observable<any> {
    let uri = `${this.url}?
                part=snippet
                &maxResults=6
                &q=tecnologia
                &type=video
                &order=relevance
                &key=${this.key}`; 
    return this.http.get<any>(uri);
  }
}