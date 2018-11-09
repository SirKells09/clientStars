import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'
                                })
};
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/user/login`, { email: email, password: password }, httpOptions)
              .pipe(map(user => {
                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('pin', user.user.pin);
                    localStorage.setItem('stars', user.user.stars);
                    localStorage.setItem('id', user.user.id);
                }
                return user;
                             
            }));
    }

    register(firstName: string, lastName: string, email: string, password: string, pin: number) {
        return this.http.post<any>(`${environment.apiUrl}/user/register`, { firstName: firstName, lastName: lastName, email: email, password: password, pin: pin } , httpOptions)
        .pipe(map(user => {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('pin', user.user.pin);
                localStorage.setItem('stars', user.user.stars);
                localStorage.setItem('id', user.user.id);
            }
            return user;
                         
        }));
    }
}       