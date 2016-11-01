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

  constructor() {
    this.name = 'YouTube';
    this.results[0]={url:'wdaw',title:'wdfg'};
    this.results[1]={url:'zxcf',title:'qqq'};
  }
}
