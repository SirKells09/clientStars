import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef } from '@angular/material';
import {SettingslistComponent} from '../settingslist/settingslist.component';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    // currentUser: boolean;
    users: User[] = [];
    currentId: number;

SettingslistRef: MatDialogRef<SettingslistComponent>
dialogResult:[]
// currentUser:[]

  constructor(public dialog: MatDialog, private us: UserService, private router: Router){
    this.currentId = JSON.parse(localStorage.getItem('id'));
  }

  ngOnInit() {
    this.us.getAll()
    .subscribe(data => {
      // console.log(data);
      this.users = data;
      console.log(this.users)
    })
    
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
        })
        this.us.getAll()
          .subscribe(data => {
          this.users = data;
          console.log(this.users)
        })
      }
     
}


