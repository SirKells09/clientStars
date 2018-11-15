import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email = new FormControl('', [Validators.required, Validators.email]);
    hide = true;
    loading = false;
   
    submitted = false;
    _email: string;
    _password: string;

    constructor(private authenticationService: AuthenticationService,
        private router: Router, public snackBar:MatSnackBar) {}

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
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