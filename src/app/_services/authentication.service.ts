import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    
                                })
};

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string) {
        return this.http.post<any>(`https://kew-serverstars.herokuapp.com/user/login`, { email: email, password: password }, httpOptions)
              .pipe(map(user => {
                if (user) {
                    localStorage.setItem('stars', user.user.stars);
                    localStorage.setItem('id', user.user.id);
                    localStorage.setItem('sessionToken', user.sessionToken);
                }
                return user
                             
            }));
    }

    register(firstName: string, lastName: string, email: string, password: string, pin: number) {
        return this.http.post<any>(`https://kew-serverstars.herokuapp.com/user/register`, { firstName: firstName, lastName: lastName, email: email, password: password, pin: pin } , httpOptions)
        .pipe(map(user => {
            if (user) {
                localStorage.setItem('stars', user.user.stars);
                localStorage.setItem('id', user.user.id);
                localStorage.setItem('sessionToken', user.sessionToken);
            }
            return user
                         
        }));
    }

    logout() {
        localStorage.removeItem('parent');
        localStorage.removeItem('id');
        localStorage.removeItem('stars');
        localStorage.removeItem('sessionToken');
        this.router.navigate(['']);
        window.location.reload();
      }
}   