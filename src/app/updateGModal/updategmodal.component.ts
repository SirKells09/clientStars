import { Component, Inject, OnInit, Input} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GoalListService } from '../_services/goal-list.service'
import { FormBuilder,FormGroup,FormControl} from '@angular/forms'
import { Goal } from '../_models/goal'


@Component({
  selector:"app-updategmodal",
  templateUrl: "./updategmodal.component.html",
styleUrls: ['./updategmodal.component.css']
})

export class UpdateGModalComponent implements OnInit {
  @Input()
  goal: Goal
  updateForm: FormGroup
  
  constructor( private gl: GoalListService,
    private dialogRef:MatDialogRef<UpdateGModalComponent>, 
   public fb:FormBuilder, @Inject(MAT_DIALOG_DATA)public data:any) 
   {this.goal=data}
  
   ngOnInit(){


     this.updateForm = this.fb.group({
       goal: new FormControl,
       dueDate: new FormControl,
       message: new FormControl,
  
     })

  }
  
  updateGoal(){
    let goalId = sessionStorage.getItem('user.id')
  this.gl.update( goalId, this.updateForm.value)
  .subscribe()
  this.dialogRef.close()
  }
    
  
  close() {
   this.dialogRef.close()
  } 
}