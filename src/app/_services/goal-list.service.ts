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

  
  postGoal(userId: any, goal:Goal ) {
    return this.http.put(`${environment.apiUrl}/user/goal/` + userId, goal, httpOptions)
  }
git 
//user goals
  getAll(userId:any):Observable<Goal[]>{
    return this.http.get<Goal[]>(`${environment.apiUrl}/goal/userlist/`+ userId)
    // return this.http.get(`${environment.apiUrl}/user/`+ userId, httpOptions )
}

update(userId:any , goal: Goal){    
  return this.http
  .put<any>(`http://${environment.apiUrl}/goal/updategoal/` + userId, goal, httpOptions )
}

delete(id:number){
  return this.http.delete(`${environment.apiUrl}/goal/delete/` + id, httpOptions)
}

}