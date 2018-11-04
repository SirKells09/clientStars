import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';

@Component({
  selector: 'app-viewgoals',
  templateUrl: './viewgoals.component.html',
  styleUrls: ['./viewgoals.component.css']
})
export class ViewgoalsComponent implements OnInit{
  _input: number;
  display: boolean;
  pin: number;
  parent: string;
 

  constructor(private router: Router) {
    this.pin = JSON.parse(localStorage.getItem('pin'));
    this.parent = localStorage.getItem('parent');
  }

  ngOnInit() {
    if(this.parent === 'true'){
      this.display = true
      console.log(this.parent)
    } else {
      this.display = false
      console.log(this.parent)
    }
  }

  onSubmit(input: number){
    this._input = input
    console.log(this.pin)
    console.log(input)
    if(this.pin == this._input){
        console.log('you rock!')
        this.display = true
        localStorage.setItem('parent', 'true');
        window.location.reload();
    } else {
        console.log('try again')
        localStorage.setItem('parent', 'false');
    }
  }

  
}
