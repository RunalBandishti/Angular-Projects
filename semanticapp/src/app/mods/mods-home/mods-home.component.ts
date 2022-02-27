import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Why is the sky blue?',
      content: 'Because the sky is blue by default!',
    },
    {
      title: 'What does the orange taste like?',
      content: 'It tastes like an orange!!!',
    },
    {
      title: 'What color is cat?',
      content: 'Color of the cat is orange!!!',
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
