import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  navLinkItems = [];

  constructor() { }

  ngOnInit() {
    this.navLinkItems = [
      {
        routerLinkItem: '/home',
        routerLinkName: 'Home'

      },
      {
        routerLinkItem: '/photos',
        routerLinkName: 'Photos'

      },
      {
        routerLinkItem: '/projects',
        routerLinkName: 'Projects'

      }
    ];
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


  toggleNavBarItem() {
    this.navbarOpen = false;
  }

}
