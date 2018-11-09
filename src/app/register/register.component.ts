import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { UserService } from '../_services/user.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    firstName = new FormControl ('', [Validators.required]);
    lastName = new FormControl ('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl ('', [Validators.required, Validators.minLength(6)]);
    pin = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]);
    returnUrl: string;
    hide = true;
    loading = false;
    submitted = false;
    _firstName: string;
    _lastName: string;
    _email: string;
    _password: string;
    _pin: number;

    constructor(
    
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

   

    firstNameErrorMessage() {
        return this.firstName.hasError('required') ? 'You must enter a value' : '';
    }

    lastNameErrorMessage() {
        return this.lastName.hasError('required') ? 'You must enter a value' : '';
    }

    emailErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
        '';
    }

    passwordErrorMessage() {
        return this.password.hasError('required') ? 'You must enter a value' :
            this.password.hasError('minLength(6)') ? 'Password must be at least 6 characters' :
        '';
    }

    pinErrorMessage() {
        return this.pin.hasError('required') ? 'You must enter a value' :
            this.pin.hasError('minLength(4), maxLength(4') ? 'Pin must be exactly 4 digits long' :
        '';
    }

    onSubmit(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        pin: number
    ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._password = password;
    this._pin = pin;
    this.submitted = true;
    this.loading = true;
    this.authenticationService.register(this._firstName, this._lastName, this._email, this._password, this._pin)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['/goals']);
        })
    }
    
}
