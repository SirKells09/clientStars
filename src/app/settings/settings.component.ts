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
    disabled: boolean;
    users: User[] = [];
    currentId: number;
    parent: string;

SettingslistRef: MatDialogRef<SettingslistComponent>
dialogResult:[]

  constructor(public dialog: MatDialog, private us: UserService, private router: Router){
    this.currentId = JSON.parse(localStorage.getItem('id'));
    this.parent = localStorage.getItem('parent');
  }

  ngOnInit() {
    if(this.parent === 'true'){
      this.disabled = false
    } else {
      this.disabled = true
    };
    this.us.getAll()
    .subscribe(data => {
      this.users = data;
    })
    
  }

  afterClosed() {
    this.us.getAll()
          .subscribe(data => {
          this.users = data;
        })
  }

  deleteUser(id: number) {
    this.us.delete(this.currentId).subscribe(data => { 
    localStorage.removeItem('parent');
    localStorage.removeItem('id');
    localStorage.removeItem('stars');
    localStorage.removeItem('sessionToken');
    this.router.navigate(['']);
    // window.location.reload();

    });
}
    openDialog(): void {
        let dialogRef = this.dialog.open(SettingslistComponent,{
          hasBackdrop: true, autoFocus:true});
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog closed: ${result}`);
          // this.dialogResult = result;
        })
        
      }
     
}


