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

  
  postGoal(id:any, goal:any ) {
    return this.http.put(`http://localhost:3000/goal/addgoal/` + id, goal, httpOptions);
  }

//user goals
  getAll(id:number) {
    return this.http.get(`${environment.apiUrl}/goal/userlist/`+ id, httpOptions )
}

update(id:string , goal: Goal){
  return this.http
  .put<any>(`http://localhost:3000/goal/updategoal/` + id, goal, httpOptions )
}

delete(id:number){
  return this.http.delete(`${environment.apiUrl}/goal/delete/` + id, httpOptions)
}

}




