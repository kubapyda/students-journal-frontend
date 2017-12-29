import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavigationEnd, Router } from '@angular/router';

import { StudentModalComponent } from './student-modal/student-modal.component';
import { StudentsService } from './shared/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  providers: [ StudentsService ]
})
export class StudentsComponent implements OnInit {

  constructor(
    public studentsService: StudentsService,
    private router: Router) {  }

  ngOnInit() {
    this.studentsService.getStudentsList();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.studentsService.getStudentsList();
      }
    });
  }

}
