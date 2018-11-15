import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material';
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

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, public snackBar:MatSnackBar) {
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

  openSnackBar(){
    this.snackBar.openFromComponent(OutSnackComponent, 
     {duration: 2000})
 }

  logout() {
    localStorage.removeItem('parent');
    localStorage.removeItem('id');
    localStorage.removeItem('stars');
    localStorage.removeItem('sessionToken');
    this.router.navigate(['']);
    this.openSnackBar();
    window.location.reload();
  }
}

@Component({
  selector: 'OutSnackComponent',
  template: `<span class="snack">
  LoggedOut.
</span>
`,
  styles: [`
    .snack{
      color: white;
    }
  `],
})
export class OutSnackComponent {}