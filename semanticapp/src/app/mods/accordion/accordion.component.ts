import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items = <any>[];
  opened = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {
    if (index === this.opened) {
      this.opened = -1;
    } else {
      this.opened = index;
    }
      
  }

}
