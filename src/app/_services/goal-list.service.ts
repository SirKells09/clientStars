import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.put(`https://kew-serverstars.herokuapp.com/user/goal/` + userId, goal, httpOptions)
  }


//user goals
  getAll(userId:number):Observable<Goal[]>{
    console.log("here you are my friend the goals you asked for")
    return this.http.get<Goal[]>(`https://kew-serverstars.herokuapp.com/user/userlist/`+ userId, httpOptions)
}

getAItem(id){
  console.log('single goal id =', id)
  return this.http.get(`https://kew-serverstars.herokuapp.com/goal/onegoal/` + id )

}

update(goalId, goal){  
  console.log('goal has been gone and gotten for you kind sir')  
  return this.http.put(`https://kew-serverstars.herokuapp.com/user/updategoal/` + goalId, goal, httpOptions)
}

updateStarred(goalId: number, starred: boolean){
  return this.http
  .put(`https://kew-serverstars.herokuapp.com/user/updategoal/` + goalId, {starred:starred}, httpOptions)
}

goalDelete(id){
  console.log('that goal is out the window')
  return this.http.delete(`https://kew-serverstars.herokuapp.com/user/delete/${id}` , httpOptions)
}

}