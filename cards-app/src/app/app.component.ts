import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/alone-tree-sunset-qe.jpg',
      username: 'nature',
      content: 'Saw this awesome tree during my hike today.',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'moutainlover',
      content: 'Here is the picture of the Snowy Mountain.',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biker123',
      content: 'I had some best biking experience today.',
    }
  ];
}
