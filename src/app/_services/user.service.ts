import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { Observable, zip } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'
                                })
};
@Injectable({
  providedIn: 'root'
})


export class UserService {
    constructor(private http: HttpClient) { }
        
        getAll() {
            return this.http.get<User[]>(`${environment.apiUrl}/user`, httpOptions);
        }

        getById(id: number) {
            return this.http.get(`${environment.apiUrl}/user/` + id, httpOptions);
        }

        login(user: User): Observable<any> {
            return this.http.post<any>(`${environment.apiUrl}/user/login`, user, httpOptions);
        }
    
        register(user: User) {
            return this.http.post(`${environment.apiUrl}/user/register`, user, httpOptions);
        }
    
        update(id: number): Observable<any> {
            return this.http.put<any>(`${environment.apiUrl}/user/` + id, httpOptions);
        }
    
        delete(id: number) {
            return this.http.delete(`${environment.apiUrl}/user/` + id, httpOptions);
        }
}