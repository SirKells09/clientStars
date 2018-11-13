import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { APIURL } from '../../environments/environment.prod';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})


export class UserService {
    constructor(private http: HttpClient) {}
      
          get() {
            return this.http.get<User>(`${APIURL}/user`, httpOptions);
        }

        getAll() {
            return this.http.get<User[]>(`${APIURL}/user`, httpOptions);
        }

        getById(id: number) {
            return this.http.get<any>(`${APIURL}/user/` + id, httpOptions)
            .pipe(map(user => {
                console.log(user);
                console.log(user.email);
                console.log(user.pin);
                console.log(user.password);
                return user
            }))
        }

        login(email: string, password: string) {
            return this.http.post<any>(`${APIURL}/user/login`, { email: email, password: password }, httpOptions)
                  .pipe(map(user => {
                    if (user) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        localStorage.setItem('pin', user.user.pin);
                        localStorage.setItem('stars', user.user.stars);
                    }
                    return user;
                                 
                }));
        }
    
        register(firstName: string, lastName: string, email: string, password: string, pin: number) {
            return this.http.post<any>(`${APIURL}/user/register`, { firstName: firstName, lastName: lastName, email: email, password: password, pin: pin } , httpOptions)
            .pipe(map(user => {
                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('pin', user.user.pin);
                    localStorage.setItem('stars', user.user.stars);
                }
                return user;
                             
            }));
        }
    
        updateStars(id: number, stars: number) {
            return this.http.put<any>(`${APIURL}/user/stars/` + id, { stars: stars }, httpOptions);
        }


        updateUser(id, userInfo) {
            
            console.log(userInfo)
            return this.http.put<any>(`${APIURL}/user/` + id, userInfo, httpOptions);
        }
    
        delete(id: number) {
            return this.http.delete(`${APIURL}/user/` + id, httpOptions);
        }
}   