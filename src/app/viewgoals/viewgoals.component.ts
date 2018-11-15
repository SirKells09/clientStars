import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from'@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatDialog,  MatDialogRef } from '@angular/material';
import { AddGModalComponent } from '../addGModal/addgmodal.component';
import { UserService } from '../_services/user.service';
import { GoalListService } from '../_services/goal-list.service';
import { Observable, of as observableOf } from 'rxjs';
import { first, timeout } from 'rxjs/operators';
import { UpdateGModalComponent} from '../updateGModal/updategmodal.component';
import { Goal } from '../_models/goal';
import {DataSource} from '@angular/cdk/collections';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-viewgoals',
  templateUrl: './viewgoals.component.html',
  styleUrls: ['./viewgoals.component.css']
})

export class ViewgoalsComponent implements OnInit{
  color = 'blue';
  multiple: boolean;
  checked: boolean;
  _input: number;
  display: boolean;
  pin: number;
  parent: string;
  userId: number;
  unstarred: boolean;
  currentStars: number;
  addGModalRef: MatDialogRef<AddGModalComponent>;
  dialogResult: any[];
  displayedColumns: string[] = ['id', 'goal', 'dueDate', 'stars', 'editDelete'];
  currentGoals: any;
  goals: Goal[] = [];
  dataSource = new GoalDataSource(this.gl);
  resultsLength: number;
  rowId: number;
  goalId: number;
  starred: boolean;
  updateResult: any[];
  id:any;
  disabled: boolean;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private gl:GoalListService,
    
    ) {
    this.parent = localStorage.getItem('parent');
    this.currentStars = JSON.parse(localStorage.getItem('stars'));
    this.userId = JSON.parse(localStorage.getItem('id'));
    this.goalId=JSON.parse(sessionStorage.getItem('goalId'));
    this.userService.getById(this.userId)
    .pipe(first()).subscribe(user => {
      this.pin = user.pin
    });
    
  
    iconRegistry.addSvgIcon(
      'star_border',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-star_border-24px.svg'));
    iconRegistry.addSvgIcon(
      'star',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-star-24px.svg'));
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-delete-24px.svg'));
    iconRegistry.addSvgIcon(
      'create',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-create-24px.svg'));
    iconRegistry.addSvgIcon(
      'library_add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-library_add-24px.svg'));
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-search-24px.svg'));
  }
  ngOnInit() {
    if(this.parent === 'true'){
      this.disabled = false
    } else {
      this.disabled = true
    };
    
    this.gl.getAll(this.userId)
      .subscribe(data => {
      console.log(data)
      this.currentGoals = data
      })
    }
    

  onSubmit(input: number){
    this._input = input
    console.log(this.pin)
    console.log(input)
    if(this.pin == this._input){
        console.log('you rock!')
        localStorage.setItem('parent', 'true');
        window.location.reload();
    } else {
        console.log('try again')
        localStorage.setItem('parent', 'false');
    }
  }

  selectRow(row) {
    console.log(row.id);
    this.rowId = row.id;

  }

  onStarClicked(goal) {
    this.starred = true;
    goal.starred = this.starred;
    this.goalId = goal.id;
    this.currentStars = this.currentStars + 1;    
    JSON.stringify(localStorage.setItem('stars', this.currentStars.toString()));
    this.userService.updateStars(this.userId, this.currentStars)
    .subscribe();
    this.gl.updateStarred(this.goalId, this.starred)
    .subscribe(data => {
      console.log(data)
    });
  }
  


  onStarUnclicked(goal) {
    this.starred = false;
    goal.starred = this.starred;
    this.goalId = goal.id;
    console.log(goal.id)
    if (this.currentStars === 1){
      this.currentStars = 0
    } else {
      this.currentStars = this.currentStars - 1;
    };
    JSON.stringify(localStorage.setItem('stars', this.currentStars.toString()));
    this.userService.updateStars(this.userId, this.currentStars)
    .subscribe();
    this.gl.updateStarred(this.goalId, this.starred)
    .subscribe();
  }
  //add a goal
  openDialog(): void {
    let dialogRef = this.dialog.open(AddGModalComponent,{
      hasBackdrop: true, autoFocus:true});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }
    //update and delete
    openDialog2(id:any):void {
      sessionStorage.setItem('goalId',id);
      console.log('Grabbed a number from the back', id)
      let dialogRef = this.dialog.open(UpdateGModalComponent);
      dialogRef.afterClosed().subscribe(result => {
        this.updateResult = result;
      });
    }

}

export class GoalDataSource extends DataSource<any> {
  userId: number;
  constructor(private gl:GoalListService) {
    super();
    this.userId = JSON.parse(localStorage.getItem('id'));
  }
  connect(): Observable<Goal[]> {
    return this.gl.getAll(this.userId);
  }
  disconnect() {}
}


export interface Goal {
  id: number;
  goal: string;
  dueDate: string;
}
