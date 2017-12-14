import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { StudentModalComponent } from './student-modal/student-modal.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(private modalService: NgbModal) {  }

  ngOnInit() {  }

  open() {
    const modalRef = this.modalService.open(StudentModalComponent, {
      backdrop: 'static',
      size: 'lg'
    });
  }

}
