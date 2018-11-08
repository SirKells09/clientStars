import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
<<<<<<< HEAD
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import { AddGModalComponent } from '../add-gmodal/add-gmodal.component'
=======
import {MatDialog,  MatDialogRef} from '@angular/material';
import { AddGModalComponent } from '../addGModal/addgmodal.component'

>>>>>>> 309bcb6d9e6fd04c873255919c5a1ef917a8f3ad
@Component({
  selector: 'app-viewgoals',
  templateUrl: './viewgoals.component.html',
  styleUrls: ['./viewgoals.component.css']
})
export class ViewgoalsComponent implements OnInit{
  _input: number;
  display: boolean;
  pin: number;
  parent: string;
  starValue: string;
  star: boolean;
  addGModalRef: MatDialogRef<AddGModalComponent>
<<<<<<< HEAD
dialogResult:[]
  
=======
  dialogResult:[]

  

>>>>>>> 309bcb6d9e6fd04c873255919c5a1ef917a8f3ad
  constructor(
    public dialog:MatDialog,
    private router: Router,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
    ) {
    this.pin = JSON.parse(localStorage.getItem('pin'));
    this.parent = localStorage.getItem('parent');
    iconRegistry.addSvgIcon(
      'star_border',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-star_border-24px.svg'));
    iconRegistry.addSvgIcon(
      'star',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-star-24px.svg'));
    
  }
  ngOnInit() {
    this.star = false;
    if(this.parent === 'true'){
      this.display = true
      // console.log(this.parent)
    } else {
      this.display = false
      // console.log(this.parent)
    }
  }
<<<<<<< HEAD
=======

>>>>>>> 309bcb6d9e6fd04c873255919c5a1ef917a8f3ad
  onStarClicked() {
    this.starValue = "1"
    this.star = true;
    JSON.stringify(localStorage.setItem('stars', this.starValue));
  }
<<<<<<< HEAD
  onStarUnclicked() {
    this.star = false;
  }
=======

  onStarUnclicked() {
    this.star = false;
  }

>>>>>>> 309bcb6d9e6fd04c873255919c5a1ef917a8f3ad
  onSubmit(input: number){
    this._input = input
    console.log(this.pin)
    console.log(input)
    if(this.pin == this._input){
        console.log('you rock!')
        this.display = true
        localStorage.setItem('parent', 'true');
        window.location.reload();
    } else {
        console.log('try again')
        localStorage.setItem('parent', 'false');
    }
  }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(AddGModalComponent,{
      hasBackdrop: true, autoFocus:true});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }
  
  }
  
<<<<<<< HEAD
=======

>>>>>>> 309bcb6d9e6fd04c873255919c5a1ef917a8f3ad
