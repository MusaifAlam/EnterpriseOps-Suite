import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isNavbarOpen = false;  // Track navbar state

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;  // Toggle navbar
  }

  closeNavbar() {
    this.isNavbarOpen = false;  // Close navbar on link click
  }
  
}
