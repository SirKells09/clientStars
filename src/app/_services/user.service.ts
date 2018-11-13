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
            return this.http.get<User>(`https://kew-serverstars.herokuapp.com/user`, httpOptions);
        }

        getAll() {
            return this.http.get<User[]>(`https://kew-serverstars.herokuapp.com/user`, httpOptions);
        }

        getById(id: number) {
            return this.http.get<any>(`https://kew-serverstars.herokuapp.com/user/` + id, httpOptions)
            .pipe(map(user => {
                console.log(user);
                console.log(user.email);
                console.log(user.pin);
                console.log(user.password);
                return user
            }))
        }

    
        updateStars(id: number, stars: number) {
            return this.http.put<any>(`https://kew-serverstars.herokuapp.com/user/stars/` + id, { stars: stars }, httpOptions);
        }


        updateUser(id, userInfo) {
            
            console.log(userInfo)
            return this.http.put<any>(`https://kew-serverstars.herokuapp.com/user/` + id, userInfo, httpOptions);
        }
    
        delete(id: number) {
            return this.http.delete(`https://kew-serverstars.herokuapp.com/user/` + id, httpOptions);
        }
}   