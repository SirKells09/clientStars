import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})

export class MainNavComponent implements OnInit{
  parent: string;
  disabled: boolean;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.parent = localStorage.getItem('parent');
  }
  
  ngOnInit() {
    // if(this.parent === 'true'){
    //   // this.display = true;
    //   this.disabled = false
    // } else {
    //   // this.display = false;
    //   this.disabled = true
    // }
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('parent');
    localStorage.removeItem('pin');
    localStorage.removeItem('id');
    localStorage.removeItem('stars');
    this.router.navigate(['']);
    window.location.reload();
  }
}
