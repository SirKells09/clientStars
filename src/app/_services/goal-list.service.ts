import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Goal} from '../_models/goal'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class GoalListService {


  constructor(private http: HttpClient) { }

  
  postGoal(goal:Goal): Observable<Goal> {
    return this.http.post<Goal>(`${environment.apiUrl}/goal/create`, goal, httpOptions);
  }


  getAll(goal:Goal) {
    return this.http.get<Goal[]>(`${environment.apiUrl}/goal/getAll`, )
}

update(id:number){
  return this.http.put<Goal[]>(`${environment.apiUrl}/goal/`+ id,httpOptions)
}

delete(id:number){
  return this.http.delete(`${environment.apiUrl}/goal/` + id, httpOptions)
}

}




