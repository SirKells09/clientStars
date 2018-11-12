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
    console.log("wow you posted something")
    return this.http.put(`${environment.apiUrl}/user/goal/` + userId, goal, httpOptions)
  }

//user goals
  getAll(userId:any):Observable<Goal[]>{
    console.log("here you are my friend the goals you asked for")
    return this.http.get<Goal[]>(`${environment.apiUrl}/user/userlist/`+ userId)
    // return this.http.get(`${environment.apiUrl}/user/`+ userId, httpOptions )
}

<<<<<<< HEAD
update(userId: any , goal: Goal){
  return this.http
  .put<any>(`${environment.apiUrl}/goal/updategoal/` + userId, goal, httpOptions )
=======
getAItem(id){
  console.log('single goal id =', id)
  return this.http.get(`${environment.apiUrl}/goal/onegoal/${id}`)
>>>>>>> 6669066b40cb951d2b4d9ee202afa961d908feb5
}

update(id: number, goal: Goal){  
  console.log('goal has been gone and gotten for you kind sir')  
  return this.http.put(`${environment.apiUrl}/goal/updategoal/` + id, goal, httpOptions )
}

<<<<<<< HEAD
updateStarred(userId: number, starred: boolean){
  return this.http
  .put<any>(`${environment.apiUrl}/user/goal/` + userId, {starred:starred}, httpOptions)
}


=======
delete(id:number){
  console.log('that goal is out the window')
  return this.http.delete(`${environment.apiUrl}/goal/delete/` + id, httpOptions)
>>>>>>> 6669066b40cb951d2b4d9ee202afa961d908feb5
}

}