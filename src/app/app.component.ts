import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Welcome to YouTube API!';
  public name: string;
  public results:Array<any>=[];
  public movies:Array<any>=[];

  constructor() {    
    this.movies = [{
      title:'JavaScript',
      url:'(link)',
      channel:'aaa',
      views:20000
    },
    {
      title:'ES6',
      url:'(link)',
      channel:'ppp',
      views:350603
    }
    ];
    this.name = 'YouTube';
    this.results[0]={url:'(link)',title:'Java Script'};
    this.results[1]={url:'(link)',title:'C++'};
  }
}
