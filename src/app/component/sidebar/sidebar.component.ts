import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public showMenu = false;
  s = {
    theme: '', // background color
    logo: '',
    items: [
      {
        id: 1,
        menu: 'Dashboard',
        icon: 'card_travel',
        url: '#'
      },
      {
        id: 2,
        menu: 'Product',
        icon: 'folder',
        url: '#'
      },
      {
        id: 3,
        menu: 'Event',
        icon: 'group',
        url: '#'
      },
      {
        id: 4,
        menu: 'Settings',
        icon: 'settings',
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
  constructor() {}

  // side nav open
  sidenav() {
    this.showMenu = !this.showMenu;
    document.getElementById('s-nav').classList.toggle('sideNavExpand');
    if (this.showMenu === false) {
      document.getElementById('s-nav').style.width = '54px';
    } else {
      document.getElementById('s-nav').style.width = '200px';
    }
  } // side nav open end

  ngOnInit() {}
}
