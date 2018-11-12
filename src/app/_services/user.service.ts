import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})


export class UserService {
    constructor(private http: HttpClient) {}
      
          get() {
            return this.http.get<User>(`${environment.apiUrl}/user`, httpOptions);
        }

        getAll() {
            return this.http.get<User[]>(`${environment.apiUrl}/user`, httpOptions);
        }

        getById(id: number) {
            return this.http.get<User>(`${environment.apiUrl}/user/` + id, httpOptions);
        }


        login(user: User) {
            return this.http.post(`${environment.apiUrl}/user/login`, user, httpOptions);
        }
    
        register(firstName: string, lastName: string, email: string, password: string, pin: number) {
            return this.http.post(`${environment.apiUrl}/user/register`, { firstName: firstName, lastName: lastName, email: email, password: password, pin: pin } , httpOptions);
        }
    
        update(id: number, email: string, pin: number, password: string) {
            return this.http.put<any>(`${environment.apiUrl}/user/` + id, { email: email, pin: pin, password: password }, httpOptions);
        }
    
        delete(id: number) {
            return this.http.delete(`${environment.apiUrl}/user/` + id, httpOptions);
        }
}