import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import { AddGModalComponent } from '../add-gmodal/add-gmodal.component'
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
dialogResult:[]
  
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
  onStarClicked() {
    this.starValue = "1"
    this.star = true;
    JSON.stringify(localStorage.setItem('stars', this.starValue));
  }
  onStarUnclicked() {
    this.star = false;
  }
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
  
