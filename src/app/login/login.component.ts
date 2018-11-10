import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
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

    constructor(
        
        private authenticationService: AuthenticationService,
        private router: Router) {}

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
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
                    this.router.navigate(['/goals']);
                }
            );
    }

    // loginForm: FormGroup;
    // loading = false;
    // submitted = false;
    // returnUrl: string;

    // constructor(
    //     private formBuilder: FormBuilder,
    //     private route: ActivatedRoute,
    //     private router: Router,
    //     private authenticationService: AuthenticationService,
    //     private alertService: AlertService) {}

    // ngOnInit() {
    //     this.loginForm = this.formBuilder.group({
    //         email: ['', Validators.required],
    //         password: ['', Validators.required]
    //     });

       

    //     // get return url from route parameters or default to '/'
    //     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/goals';
    // }

    // // convenience getter for easy access to form fields
    // get f() { return this.loginForm.controls; }

    // onSubmit() {
    //     this.submitted = true;
    //     // stop here if form is invalid
    //     if (this.loginForm.invalid) {
    //         return;
    //     }
        
    //     this.loading = true;
    //     this.authenticationService.login(this.f.email.value, this.f.password.value)
    //         .pipe(first())
    //         .subscribe(
    //             data => {
    //                 this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
    // }
}
