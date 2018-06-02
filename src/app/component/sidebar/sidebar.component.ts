import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items = [
    {
      id: 1,
      menu: 'menu1'
    }
  ];
  constructor() {
    console.log(this.items);
  }

  ngOnInit() {}
}
