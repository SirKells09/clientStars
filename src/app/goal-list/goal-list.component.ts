import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddGModalComponent } from '../addGModal/addgmodal.component'



@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})

export class GoalListComponent {
addGModelRef: MatDialogRef<AddGModalComponent>
dialogResult:[]
  constructor(private dialog:MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddGModalComponent,{
      hasBackdrop: true, autoFocus:true});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }

  }

