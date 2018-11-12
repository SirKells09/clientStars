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
  private updateForm: FormGroup
  
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
    let goalId = sessionStorage.getItem('goal.id')
    this.gl.update( goalId, this.updateForm.value)
    .subscribe(data => {
      console.log(data);
      console.log(goalId)
    this.dialogRef.close(data);
  })
}
  
  close() {
   this.dialogRef.close()
  } 
}