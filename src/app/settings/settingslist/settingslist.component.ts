import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms'
import {User} from '../../_models/user';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'app-settingslist',
  templateUrl: './settingslist.component.html',
  styleUrls: ['./settingslist.component.css']
})
export class SettingslistComponent implements OnInit {
user:User
userForm: FormGroup

  constructor(private us: UserService ,
    public dialogRef: MatDialogRef<SettingslistComponent>,
    public fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA)public data:any)
{
 this.user = data
}
  
ngOnInit() {
  this.userForm = this.fb.group({
    email: new FormControl,
    pin: new FormControl,
    password: new FormControl
   });
}


  // deleteUser(id: number) {
  //   this.us.delete(id).pipe(first()).subscribe(() => { 
  //       // this.loadAllUsers() 
  //   });
// }

addUser() :void { 
  this.us.update(this.userForm.value).subscribe( data => {
      this.dialogRef.close(data)
      //  this.loadAllUsers();

    });
}

// getUser(user: User) {
//     this.us.get().pipe(first()).subscribe(data => {
//        user = user;
//     });
// }

// private loadAllUsers() {
//     this.us.getAll().pipe(first()).subscribe(data => { 
//         this.user = user; 
//     });
// }
  close() {
    this.dialogRef.close()
  }

}
