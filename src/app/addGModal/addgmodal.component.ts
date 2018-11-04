import {Component, Inject,OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GoalListService } from '../_services/goal-list.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'




@Component({
  template: `
  
  <form [formGroup]="goalForm" (ngSubmit)="postGoal(goalForm.value)">
  <mat-dialog-content>
  <h1 mat-dialog-title>RECORD YOUR GOAL!</h1>

  <Label>Goal </Label>
  <input matInput placeholder="Goal" type='text' formControlName="goal">
  
  <hr>
  
  <Label>Due Date</Label>
  <input matInput type='text' formControlName="dueDate">
  
  <hr>
  
      <Label>Message</Label>
      <input matInput type='text' formControlName="message">
      
      </mat-dialog-content>
  <mat-dialog-actions>
  <button class="submit-btn" color="primary" mat-raised-button type="submit">CONFIRM</button>&nbsp;
  <button mat-dialog-close (click)="onCloseCancel()">CANCEL</button>
  </mat-dialog-actions>
  
      
    </form>
   `,
  styleUrls: ['./addgmodal.component.css']
})
export class AddGModalComponent implements OnInit {
dialogResult:object;

goalForm = this.fb.group({
  goal: [''],
  dueDate: [''],
  message: ['']

})

  constructor(private fb: FormBuilder, private gl: GoalListService, public dialogRef: MatDialogRef<AddGModalComponent>) { 
    
  }
  get gfc() { return this.goalForm.value }

  postGoal() {
    this.gl.postGoal(this.gfc.value)
      .subscribe(
        data => {
          console.log("Posted", data)
        }
      )

      }
  
  ngOnInit() {
  }

}
