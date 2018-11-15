import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import { AuthenticationService } from '../_services/authentication.service';
import { GoalListService } from '../_services/goal-list.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl ('', [Validators.required, Validators.minLength(6)]);
    hide = true;
    loading = false;
    submitted = false;
    _email: string;
    _password: string;
    userId: number;

    constructor(private gl: GoalListService, private authenticationService: AuthenticationService,
        private router: Router, public snackBar:MatSnackBar) {
            this.userId = JSON.parse(localStorage.getItem('id'));
    }

       openSnackBar(){
         this.snackBar.openFromComponent(LoginSnackComponent, 
          {duration: 2000})
      }

      onSubmit(email: string, password: string) {
        this._email = email;
        this._password = password;
        this.submitted = true;
        this.loading = true;
        this.authenticationService.login(this._email, this._password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/viewgoals']);
                    this.openSnackBar()
                }
            );
            this.gl.getAll(this.userId);
    }
}
@Component({
    selector: 'LoginSnackComponent',
    template: `<span class="snack">
    Logged In.
  </span>
  `,
    styles: [`
      .snack{
        color: white;
      }
    `],
  })
  export class LoginSnackComponent {}