import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import {User} from '../_models/user';
import { UserService } from '../_services/user.service';
import { first, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-settingslist',
  templateUrl: './settingslist.component.html',
  styleUrls: ['./settingslist.component.css']
})
export class SettingslistComponent{
user : User;
users: User[] = [];
userUpdate: FormGroup;
currentId: number;
currentEmail: string;
_email: string;
_password: string;
_pin: number;


  constructor(private us: UserService ,
    public dialogRef: MatDialogRef<SettingslistComponent>,
    public fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA)public data:any)
{
 this.user = data
 this.currentId = JSON.parse(localStorage.getItem('id'));

}
ngOnInit(){
  this.loadAllUsers();
  console.log(this.loadAllUsers);


  this.userUpdate = this.fb.group({
    email:new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
    pin: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)])

  })
}

updateUser() {
  this.us.updateUser(this.currentId, this.userUpdate.value)
  .pipe(first())
  .subscribe( data => {
    this.dialogRef.close(data);
    window.location.reload();
  });
}


deleteUser(id: number) {
  this.us.delete(this.currentId).subscribe(() => { 
      this.loadAllUsers()
      window.location.reload();
  });
}

currentUser(id: number) {
  
    this.us.getById(this.currentId).pipe(first()).subscribe(users => { 
      console.log(this.currentUser)
    });
}

private loadAllUsers(){
this.us.getAll().pipe(first()).subscribe(users =>{
  this.users=users;
});

}
  close() {
    this.dialogRef.close()
  }

}
