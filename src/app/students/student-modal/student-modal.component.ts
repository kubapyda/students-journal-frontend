import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-modal-content',
  styleUrls: ['./student-modal.component.scss'],
  templateUrl: './student-modal.component.html'
})
export class NgbdModalContent {

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-student-modal',
  template: ``,
  styleUrls: ['./student-modal.component.scss']
})
export class StudentModalComponent {

  constructor(private modalService: NgbModal, private router: Router) {
    this.modalService.open(NgbdModalContent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate(['../../students']);
    });
  }
}
