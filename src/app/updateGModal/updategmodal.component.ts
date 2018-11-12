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
  goal: Goal;
   updateForm: FormGroup;
   id: number;
   goalId:any;
  
  constructor( private gl: GoalListService,
    private dialogRef:MatDialogRef<UpdateGModalComponent>, 
   public fb:FormBuilder, @Inject(MAT_DIALOG_DATA)public data:any) 
   {this.goal=data}
  
   close() {
    this.dialogRef.close()
  } 
  
  ngOnInit(){
          this.updateForm = this.fb.group({
            goal: new FormControl,
            message: new FormControl,
            dueDate: new FormControl
       
          })
  }
  

   
  updateGoal(){
    this.goalId = sessionStorage.getItem('goalId')
    console.log('GOALID =',this.goalId)
    this.gl.update(this.goalId, this.updateForm.value)
    .subscribe(data => {
      console.log(data)
      console.log('goal has been updated')
    })
    this.dialogRef.close(this.goalId)
  }


      
  deleteGoal(){
    this.goalId = sessionStorage.getItem('goalId')
    console.log(this.goalId)
    console.log('deleting shall commence')
  this.gl.goalDelete(this.goalId)
  .subscribe(data=>
    console.log(data)
    )
  } 

}