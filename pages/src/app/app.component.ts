import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  currentPage = 0;

  

  images = [
    {
      title: 'Picture 0',
      url: 'assets/baby-groot-5k-2018-0h.jpg',
    },
    {
      title: 'Picture 1',
      url: 'assets/Boku no Hero Academia 2048 x 1297.jpg',
    },
    {
      title: 'Picture 2',
      url: 'assets/CAYXIsmUYAAsX2R.jpg',
    },
    {
      title: 'Picture 3',
      url: 'assets/cyberpunk-2077-tony-stark-ig.jpg',
    },
    {
      title: 'Picture 4',
      url: 'assets/Naruto 1920 x 1080 (1).jpg',
    }
  ];

  checkWindowIndex(index:number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
