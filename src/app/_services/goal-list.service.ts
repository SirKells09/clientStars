import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Goal} from '../_models/goal'


@Injectable({
  providedIn: 'root'
})
export class GoalListService {

  constructor(private http: HttpClient) { }
  postGoal(goal: Goal) {
    return this.http.post(`${environment.apiUrl}/goal/create`, goal);
  }
  
  

  getAll(goal) {
    return this.http.get(`${environment.apiUrl}/goal/getAll`, goal)
}
}




