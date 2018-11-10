import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef } from '@angular/material';
import {SettingslistComponent} from '../settingslist/settingslist.component';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

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
    currentId: number;

SettingslistRef: MatDialogRef<SettingslistComponent>
dialogResult:[]
currentUser:[]

  constructor(public dialog: MatDialog, private us: UserService, private router: Router){
    this.currentId = JSON.parse(localStorage.getItem('id'))
  }

  ngOnInit() {
  }
  deleteUser(id: number) {
    this.us.delete(this.currentId).subscribe(data => { 
    localStorage.removeItem('currentUser');
    localStorage.removeItem('parent');
    localStorage.removeItem('pin');
    localStorage.removeItem('id');
    this.router.navigate(['']);
    window.location.reload();

    });
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


