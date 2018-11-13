import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';
import {Goal} from '../_models/goal'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class GoalListService {


  constructor(private http: HttpClient) { }

  
  postGoal(userId: number, goal:Goal ) {
    console.log("wow you posted something")
    return this.http.put(`${APIURL}/user/goal/` + userId, goal, httpOptions)
  }


//user goals
  getAll(userId:number):Observable<Goal[]>{
    console.log("here you are my friend the goals you asked for")
    return this.http.get<Goal[]>(`${APIURL}/user/userlist/`+ userId, httpOptions)
}

getAItem(id){
  console.log('single goal id =', id)
  return this.http.get(`${APIURL}/goal/onegoal/` + id )

}

update(goalId, goal){  
  console.log('goal has been gone and gotten for you kind sir')  
  return this.http.put(`${APIURL}/user/updategoal/` + goalId, goal, httpOptions)
}

updateStarred(goalId: number, starred: boolean){
  return this.http
  .put(`${APIURL}/user/updategoal/` + goalId, {starred:starred}, httpOptions)
}

goalDelete(id){
  console.log('that goal is out the window')
  return this.http.delete(`${APIURL}/user/delete/${id}` , httpOptions)
}

}