import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Welcome to YouTube API!';
  public name: string;

  constructor() {
    this.name = 'YouTube';
  }
}
