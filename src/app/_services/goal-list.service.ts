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

  
  postGoal(userId: number, goal:Goal ) {
    return this.http.put(`${environment.apiUrl}/user/goal/` + userId, goal, httpOptions)
  }

//user goals
  getAll(userId: number):Observable<Goal[]>{
    return this.http.get<Goal[]>(`${environment.apiUrl}/user/userlist/`+ userId, httpOptions )
    // return this.http.get(`${environment.apiUrl}/user/`+ userId, httpOptions )
}

update(userId: any , goal: Goal){
  return this.http
  .put<any>(`${environment.apiUrl}/goal/updategoal/` + userId, goal, httpOptions )
}

delete(id:number){
  return this.http.delete(`${environment.apiUrl}/goal/delete/` + id, httpOptions)
}

updateStarred(userId: number, starred: boolean){
  return this.http
  .put<any>(`${environment.apiUrl}/user/goal/` + userId, {starred:starred}, httpOptions)
}


}






