import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GoalListService } from '../_services/goal-list.service'
import { FormBuilder,FormGroup,FormControl} from '@angular/forms'
import { Goal } from '../_models/goal'

@Component({
  selector:"app-addgmodal",
  templateUrl: "./addgmodal.component.html",
styleUrls: ['./addgmodal.component.css']
})

export class AddGModalComponent implements OnInit {
  goal: Goal;
  goalForm: FormGroup;
  userId: number;
  
  constructor( private gl: GoalListService,
    public dialogRef:MatDialogRef<AddGModalComponent>, 
   public fb:FormBuilder, @Inject(MAT_DIALOG_DATA)public data:any) 
   {this.goal=data}
    
   close() {
     this.dialogRef.close()
     window.location.reload();
   }
  ngOnInit(){
    this.userId = JSON.parse(localStorage.getItem('id'));
    this.goalForm = this.fb.group({
      goal: new FormControl,
      dueDate: new FormControl,
      message: new FormControl
    })
  }
  
addGoal(){
  // let userId = sessionStorage.getItem('userid')
  this.gl.postGoal(this.userId, this.goalForm.value).subscribe()
  this.dialogRef.close()
}

}