import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {GoalListService} from '../_services/goal-list.service';
// import { environment } from '../../environments/environment';
// import { ReactiveFormsModule } from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})

export class GoalListComponent implements OnInit {
  closeResult: string;
  goalForm:FormGroup;
 any:{};

  constructor(private modalService: NgbModal, private fb: FormBuilder,private gl:GoalListService ) {}
  ngOnInit() {
    this.goalForm=this.fb.group({
goal:new FormControl(),
dueDate: new FormControl(),
message: new FormControl

    })
  }
  onCreatGoal(){
  
    
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-lg-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}



