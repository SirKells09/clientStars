import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import {DomSanitizer} from '@angular/platform-browser'
import {MatIconRegistry} from '@angular/material'
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import {MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import {SettingslistComponent} from '../settings/settingslist/settingslist.component';
import { FormBuilder,FormGroup,FormControl} from '@angular/forms'



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    // currentUser: User;
    // users: User[] = [];
    // _email: string;
    // _pin: number;
    // _password: string;

SettingslistREf: MatDialogRef<SettingslistComponent>
dialogResult:[]

  constructor(public dialog: MatDialog){}


  ngOnInit() {
  }



    openDialog(): void {
        let dialogRef = this.dialog.open(SettingslistComponent,{
          hasBackdrop: true, autoFocus:true});
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog closed: ${result}`);
          this.dialogResult = result;
        });
      }
     
      }


