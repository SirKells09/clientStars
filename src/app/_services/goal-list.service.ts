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
    console.log("wow you posted something")
    return this.http.put(`${environment.apiUrl}/user/goal/` + userId, goal, httpOptions)
  }

  getAll(userId:number):Observable<Goal[]>{
    console.log("here you are my friend the goals you asked for")
    return this.http.get<Goal[]>(`${environment.apiUrl}/user/userlist/`+ userId, httpOptions)
}

getAItem(id){
  console.log('single goal id =', id)
  return this.http.get(`${environment.apiUrl}/goal/onegoal/` + id )
}

update(id, goal){  
  console.log('goal has been gone and gotten for you kind sir')  
  return this.http.put(`${environment.apiUrl}/goal/updategoal/${id}`, goal, httpOptions )
}

goalDelete(id){
  console.log('that goal is out the window')
  return this.http.delete(`${environment.apiUrl}/goal/delete/${id}` , httpOptions)
}

}