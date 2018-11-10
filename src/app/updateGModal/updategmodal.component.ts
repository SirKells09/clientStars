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
  

getAGoal(){
  this.gl.getAItem(this.id)
  .subscribe(this.data)

  
}
   
  updateGoal(){
    this.id = JSON.parse(sessionStorage.getItem('goalId'))
    console.log(this.id)
    this.gl.update(this.id, this.updateForm.value)
    .subscribe(data => {
      console.log(data)
      console.log('goal has been updated')
    })
    this.dialogRef.close(this.id)
  }
}