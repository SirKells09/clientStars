import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from'@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatDialog,  MatDialogRef } from '@angular/material';
import { AddGModalComponent } from '../addGModal/addgmodal.component';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UserService } from '../_services/user.service';
import { GoalListService } from '../_services/goal-list.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { first, map, catchError, switchMap } from 'rxjs/operators';
import { UpdateGModalComponent} from '../updateGModal/updategmodal.component';
import { Goal } from '../_models/goal';
import {DataSource} from '@angular/cdk/collections';



@Component({
  selector: 'app-viewgoals',
  templateUrl: './viewgoals.component.html',
  styleUrls: ['./viewgoals.component.css']
})

export class ViewgoalsComponent implements OnInit{
  // checked: false;
  _input: number;
  display: boolean;
  pin: number;
  parent: string;
  currentId: number;
  starred: boolean;
  currentStars: number;
  addGModalRef: MatDialogRef<AddGModalComponent>;
  dialogResult:[];
  displayedColumns: string[] = ['id', 'goal', 'dueDate', 'stars'];
  currentUser: {};
  currentGoals: any;
  goals: Goal[] = [];
  dataSource = new GoalDataSource(this.gl);
  resultsLength: number
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private gl:GoalListService,
    
    ) {
    this.pin = JSON.parse(localStorage.getItem('pin'));
    this.parent = localStorage.getItem('parent');
    this.currentStars = JSON.parse(localStorage.getItem('stars'));
    this.currentId = JSON.parse(localStorage.getItem('id'));
    
  
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
    this.starred = false;

    if(this.parent === 'true'){
      this.display = true
    } else {
      this.display = false
    };

        
    
    this.gl.getAll(this.currentId)
      .subscribe(data => {
      console.log(data)
      this.currentGoals = data
      console.log(this.currentGoals)
      })

      this.currentGoals.paginator = this.paginator;
      this.currentGoals.sort = this.sort;
    }
    

  deleteGoal(){
    let goalId:any = sessionStorage.getItem('goalId')
  this.gl.delete(goalId)
  .subscribe()
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
  
  onStarClicked():void {
    this.starred = true;
    this.currentStars = this.currentStars + 1;
    JSON.stringify(localStorage.setItem('stars', this.currentStars.toString()));
    this.currentUser = this.userService.getById(this.currentId)
    .pipe(first())
    .subscribe(data => {
      console.log(this.currentUser)
    });
  }


  onStarUnclicked():void {
    this.starred = false;
    if (this.currentStars === 1){
      this.currentStars = 0
    } else {
      this.currentStars = this.currentStars - 1;
    };
    JSON.stringify(localStorage.setItem('stars', this.currentStars.toString()));
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddGModalComponent,{
      hasBackdrop: true, autoFocus:true});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }
    
    openDialog2(): void {
      // sessionStorage.getItem('goalId')
      let dialogRef = this.dialog.open(UpdateGModalComponent,{
        hasBackdrop: true, autoFocus:true});
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result;
      });
    }

  applyFilter(filterValue: string) {
    this.currentGoals.filter = filterValue.trim().toLowerCase();

    if (this.currentGoals.paginator) {
      this.currentGoals.paginator.firstPage();
    }
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

// export interface Database {
//   goalItems: Goals[];
//   total_count: number;
// }

export interface Goal {
  id: number;
  goal: string;
  dueDate: string;
}