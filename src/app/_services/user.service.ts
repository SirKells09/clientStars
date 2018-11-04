import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'
                                })
};
@Injectable({
  providedIn: 'root'
})


export class UserService {
    constructor(private http: HttpClient) { }
        
        get() {
            return this.http.get<User>(`${environment.apiUrl}/user`, httpOptions);
        }

        getAll() {
            return this.http.get<User[]>(`${environment.apiUrl}/user`, httpOptions);
        }

        getById(id: number) {
            return this.http.get(`${environment.apiUrl}/user/` + id, httpOptions);
        }

        login(user: User) {
            return this.http.post(`${environment.apiUrl}/user/login`, user, httpOptions);
        }
    
        register(user: User) {
            return this.http.post(`${environment.apiUrl}/user/register`, user, httpOptions);
        }
    
        update(id: number) {
            return this.http.put<any>(`${environment.apiUrl}/user/` + id, httpOptions);
        }
    
        delete(id: number) {
            return this.http.delete(`${environment.apiUrl}/user/` + id, httpOptions);
        }

}