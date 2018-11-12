import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import {User} from '../_models/user';
import { UserService } from '../_services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-settingslist',
  templateUrl: './settingslist.component.html',
  styleUrls: ['./settingslist.component.css']
})
export class SettingslistComponent{
user : User;
users: User[] = [];
// userForm: FormGroup;
currentId: number;
currentEmail: string;
_email: string;
_password: string;
_pin: number;
email = new FormControl('', [Validators.required, Validators.email]);
password = new FormControl ('', [Validators.required, Validators.minLength(6)]);
pin = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]);

  constructor(private us: UserService ,
    public dialogRef: MatDialogRef<SettingslistComponent>,
    // public fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA)public data:any)
{
 this.user = data
 this.currentId = JSON.parse(localStorage.getItem('id'));

}
ngOnInit(){
  this.loadAllUsers();
  console.log(this.loadAllUsers);
}
  
  deleteUser(id: number) {
    this.us.delete(this.currentId).subscribe(() => { 
        this.loadAllUsers()
    });
}

updateUser(id: number, email: string, pin: number, password: string) {
  this._email = email;
  this._pin = pin;
  this._password = password;

  this.us.update(this.currentId, this._email, this._pin, this._password)
  .pipe(first())
  .subscribe( data => {
      this.dialogRef.close(data);
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