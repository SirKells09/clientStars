import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatInputModule , MatFormField} from '@angular/material';
import { GoalListService } from '../_services/goal-list.service'
import { FormBuilder,FormGroup,FormControl} from '@angular/forms'
import { Goal } from '../_models/goal'




@Component({
  selector:"app-addgmodal",
  templateUrl: "./addgmodal.component.html",
styleUrls: ['./addgmodal.component.css']
})

export class AddGModalComponent implements OnInit {
  goal: Goal
  goalForm: FormGroup
  
  constructor( private gl: GoalListService,
    public dialogRef:MatDialogRef<AddGModalComponent>, 
   public fb:FormBuilder, @Inject(MAT_DIALOG_DATA)public data:any) {this.goal=data}
  
  ngOnInit(){

    this.goalForm = this.fb.group({
      goal: new FormControl,
      dueDate: new FormControl,
      message: new FormControl
      
    })
  }
  
  addGoal():void{
    this.gl.postGoal(this.goalForm.value).subscribe(data => {
      console.log(data);
      this.dialogRef.close(data);
    })
  }
  
  close() {
    this.dialogRef.close()
  }
}