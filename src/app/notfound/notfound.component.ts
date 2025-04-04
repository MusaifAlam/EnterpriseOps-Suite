import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {

  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}
