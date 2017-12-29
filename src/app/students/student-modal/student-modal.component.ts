import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterStateSnapshot } from '@angular/router';

import { Component } from '@angular/core';
import { DeanGroupService } from './../../dean-group/shared/dean-group.service';
import { Globals } from '../../global';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { StudentsService } from './../shared/students.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students-modal-component',
  styleUrls: ['./student-modal.component.scss'],
  templateUrl: './student-modal.component.html',
  providers: [ StudentsService, DeanGroupService ]
})
export class StudentsModalComponent implements OnInit {

  private id: number;
  public selectizeConfig: Object;

  constructor(
    private activeModal: NgbActiveModal,
    private deanGroupService: DeanGroupService,
    private studentsService: StudentsService,
    private toastr: ToastrService,
    private router: Router,
    private global: Globals
  ) {
    this.deanGroupService.getDeanGroupsList();
    this.selectizeConfig = global.selectizeConfig;

    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
    const array = snapshot.url.split('/');
    if (array[array.length - 2] === 'edit') {
      this.id = +array[array.length - 1];
    } else {
      this.id = 0;
    }
  }

  ngOnInit() {
    if (this.id) {
      this.studentsService.getStudent(this.id);
    }
  }

  save(): void {
    if (this.id) {
      this.studentsService.putStudent(this.studentsService.student, this.id).subscribe(data => {
        this.toastr.success('Pomyślnie zaktualizowano studenta');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas aktualizacji studenta');
        this.afterChangeData();
      });
    } else {
      this.studentsService.postStudent(this.studentsService.student).subscribe(success => {
        this.toastr.success('Pomyślnie dodano studenta');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas dodawania studenta');
        this.afterChangeData();
      });
    }
  }

  afterChangeData(): void {
    this.activeModal.close();
    this.router.navigate(['../../students']);
  }
}

@Component({
  selector: 'app-student-modal',
  template: ``,
  styleUrls: ['./student-modal.component.scss']
})
export class StudentModalComponent {

  constructor(private modalService: NgbModal, private router: Router) {
    this.modalService.open(StudentsModalComponent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate(['../../students']);
    });
  }
}
