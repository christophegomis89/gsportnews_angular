import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class NavigationComponent implements OnInit {

  constructor() { }

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  
  onResize(event){
    event.target.innerWidth; // window width
    if (this.navbarCollapsed === false){
      this.toggleNavbarCollapsing();
    }
  }

  ngOnInit(): void {
  }
}