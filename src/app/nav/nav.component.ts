import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  navbarOpen = false;

  constructor(private router: Router){
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
