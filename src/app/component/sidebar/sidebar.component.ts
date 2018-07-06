import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  s = {
    theme: '', // background color
    logo: '',
    items: [
      // menu items
      {
        id: 1,
        menu: 'menu1',
        url: '#',
        icon: 'assignment_turned_in',
        toggleButton: ''
      },
      {
        id: 2,
        menu: 'menu2',
        icon: 'card_travel',
        url: '#'
      },
      {
        id: 23,
        menu: 'menu3',
        icon: 'event',
        url: '#'
      }
    ],
    breadcrumbs: [
      // breadcrumbs
      {
        id: 1,
        menu: 'b1',
        url: '#',
        icon: ''
      },
      {
        id: 2,
        menu: 'b2',
        url: '#'
      }
    ]
  };
  constructor() {
    console.log(this.s);
  }

  ngOnInit() {}
}
