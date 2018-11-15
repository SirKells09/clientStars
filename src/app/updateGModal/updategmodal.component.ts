import { Component, Inject, OnInit, Input} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GoalListService } from '../_services/goal-list.service'
import { FormBuilder,FormGroup,FormControl} from '@angular/forms'
import {MatSnackBar} from '@angular/material';

import { Goal } from '../_models/goal'


@Component({
  selector:"app-updategmodal",
  templateUrl: "./updategmodal.component.html",
styleUrls: ['./updategmodal.component.css']
})

export class UpdateGModalComponent implements OnInit {
  goal: Goal;
  updateForm: FormGroup;
  goalId: any;
  
  constructor( private gl: GoalListService,
    private dialogRef:MatDialogRef<UpdateGModalComponent>, 
   public fb:FormBuilder, @Inject(MAT_DIALOG_DATA)public data:any,
   public snackBar:MatSnackBar) 
   {this.goal=data}
  
   ngOnInit(){
     this.updateForm = this.fb.group({
       goal: new FormControl,
       message: new FormControl,
       dueDate: new FormControl
       
      })
      this.userId = JSON.parse(localStorage.getItem('id'));
    }
    
    
    openSnackBar(){
      this.snackBar.openFromComponent(UpdateSnackComponent, 
       {duration: 5000})
   }
   openSnackBar2(){
     this.snackBar.openFromComponent(DeleteSnackComponent, 
       {duration: 5000})
   }
   
  close() {
    this.dialogRef.close()
    window.location.reload();
  }

  updateGoal(){
    this.goalId = JSON.parse(sessionStorage.getItem('goalId'));
    console.log('goalId =',this.goalId)
    this.gl.update(this.goalId, this.updateForm.value)
    
    .subscribe(data => {
      console.log(data)
    })
    this.openSnackBar()
    this.dialogRef.close()
    window.location.reload();
  }

  deleteGoal(){
    this.goalId = sessionStorage.getItem('goalId');
    console.log(this.goalId)
    console.log('deleting shall commence')
  this.gl.goalDelete(this.goalId)
  .subscribe(data=>
    console.log(data)
    )
    this.openSnackBar2()
    this.dialogRef.close()
    window.location.reload();
  } 
  
  close() {
   this.dialogRef.close()
  } 
}

@Component({
  selector: 'UpdateSnackComponent',
  templateUrl: 'updateSnack.html',
  styles: [`
    .snack{
      color: white;
    }
  `],
})
export class UpdateSnackComponent {}

@Component({
  selector: 'DeleteSnackComponent',
  templateUrl: 'deleteSnack.html',
  styles: [`
    .snack{
      color: white;
    }
  `],
})

export class DeleteSnackComponent {}