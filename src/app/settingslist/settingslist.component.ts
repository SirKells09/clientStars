import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef } from '@angular/material';
import {SettingslistComponent} from '../settingslist/settingslist.component';
import { UserService } from '../_services/user.service';
import { first, timeout } from 'rxjs/operators';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
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
    // window.location.reload();
  });
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


private loadAllUsers(){
this.us.getAll().pipe(first()).subscribe(users =>{
  this.users=users;
});

}
  close() {
    this.dialogRef.close()
  }

}

