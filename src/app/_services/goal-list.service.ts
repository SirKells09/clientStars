import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Goal} from '../_models/goal'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class GoalListService {


  constructor(private http: HttpClient) { }

  
  postGoal(goal: Goal) {
    return this.http.post(`http://localhost:3000/goal/create`, goal);
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




