import { Component, OnInit } from '@angular/core';

import { Globals } from './../../global/global';
import { GradleSubject } from './../../global/gradleSubject';
import { GradlesSubjectService } from './../../service/gradlesSubject.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ProjectsService } from '../../projects/shared/projects.service';
import { Router } from '@angular/router';
import { StudentsService } from './../../students/shared/students.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subjects-gradle-modal',
  templateUrl: './subjects-gradle-modal.component.html',
  styleUrls: ['./subjects-gradle-modal.component.scss'],
  providers: [ StudentsService, ProjectsService, GradlesSubjectService ]
})
export class SubjectGradleModalComponent implements OnInit {
  private id: number;
  public selectizeConfig: Object;
  public model: Date;
  public subjectGradle: GradleSubject = new GradleSubject(null, '', 0, 0, 0);
  public gradleValue: Object = [
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 3.5, name: '3.5' },
    { id: 4, name: '4' },
    { id: 4.5, name: '4.5' },
    { id: 5, name: '5' }
  ];

  public typeValue: Object = [
    { id: 1, name: 'Wykład' },
  ];

  constructor(
    private activeModal: NgbActiveModal,
    private studentsService: StudentsService,
    private projectsService: ProjectsService,
    private gradleSubjectsService: GradlesSubjectService,
    private toastr: ToastrService,
    private router: Router,
    private global: Globals
  ) {
    this.projectsService.getSelectizeProjectsList(+localStorage.getItem('userId'));
    this.studentsService.getSelectizeStudentsList();
    this.selectizeConfig = this.global.selectizeConfig;
  }

  ngOnInit() {
  }

  save(): void {
    const keys = Object.keys(this.model);
    this.subjectGradle.gradle_subject_date = `${this.model[keys[2]]}-${this.model[keys[1]]}-${this.model[keys[0]]}`;
    this.subjectGradle.type_id = +this.subjectGradle.type_id;
    this.subjectGradle.student_ID = +this.subjectGradle.student_ID;
    this.subjectGradle.lead_ID = +localStorage.getItem('userId');
    console.log(this.subjectGradle);
    this.gradleSubjectsService.saveGradleForSubject(null, this.subjectGradle).subscribe(data => {
      this.toastr.success('Pomyślnie dodano ocenę');
      this.afterChangeData();
    }, err => {
      this.toastr.error('Błąd podczas dodawania oceny');
      this.afterChangeData();
    });
  }

  afterChangeData(): void {
    this.activeModal.close();
    this.router.navigate(['../../subjects-gradle']);
  }
}

@Component({
  selector: 'app-subjects-gradle-modal',
  template: ``,
  styleUrls: ['./subjects-gradle-modal.component.scss']
})
export class SubjectsGradleModalComponent {

  constructor(private modalService: NgbModal, private router: Router) {
    this.modalService.open(SubjectGradleModalComponent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate(['../../subjects-gradle']);
    });
  }


}
