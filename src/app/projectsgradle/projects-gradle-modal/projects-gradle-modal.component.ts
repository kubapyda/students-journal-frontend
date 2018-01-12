import { Component, OnInit } from '@angular/core';

import { Globals } from '../../global';
import { GradleProject } from '../../shared/gradleProject';
import { GradlesProjectService } from './../../shared/gradlesProject.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ProjectsService } from '../../projects/shared/projects.service';
import { Router } from '@angular/router';
import { StudentsService } from './../../students/shared/students.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects-gradle-modal',
  templateUrl: './projects-gradle-modal.component.html',
  styleUrls: ['./projects-gradle-modal.component.scss'],
  providers: [ ProjectsService, StudentsService, GradlesProjectService ]
})
export class ProjectGradleModalComponent implements OnInit {

  private id: number;
  public selectizeConfig: Object;
  public model: Date;
  public projectGradle: GradleProject = new GradleProject(null, '', 0, 0, 0);
  public gradleValue: Object = [
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 3.5, name: '3.5' },
    { id: 4, name: '4' },
    { id: 4.5, name: '4.5' },
    { id: 5, name: '5' }
  ];

  constructor(
    private activeModal: NgbActiveModal,
    private studentsService: StudentsService,
    private projectsService: ProjectsService,
    private gradlesProjectService: GradlesProjectService,
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
    this.projectGradle.gradle_date = `${this.model[keys[2]]}-${this.model[keys[1]]}-${this.model[keys[0]]}`;
    this.projectGradle.project_ID = +this.projectGradle.project_ID;
    this.projectGradle.student_ID = +this.projectGradle.student_ID;
    this.projectGradle.lead_ID = +localStorage.getItem('userId');
    this.gradlesProjectService.saveGradleForProject(this.projectGradle).subscribe(data => {
      this.toastr.success('Pomyślnie dodano ocenę');
      this.afterChangeData();
    }, err => {
      this.toastr.error('Błąd podczas dodawania oceny');
      this.afterChangeData();
    });
  }

  afterChangeData(): void {
    this.activeModal.close();
    this.router.navigate(['../../projects-gradle']);
  }

}

@Component({
  selector: 'app-projects-gradle-modal',
  template: ``,
  styleUrls: ['./projects-gradle-modal.component.scss']
})
export class ProjectsGradleModalComponent {

  constructor(private modalService: NgbModal, private router: Router) {
    this.modalService.open(ProjectGradleModalComponent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate(['../../projects-gradle']);
    });
  }

}
