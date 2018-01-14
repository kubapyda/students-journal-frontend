import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

import { Globals } from './../../global/global';
import { LeadersService } from '../../leaders/shared/leaders.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ProjectsService } from '../shared/projects.service';
import { SubjectsService } from '../../subjects/shared/subjects.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students-modal-component',
  templateUrl: './projects-modal.component.html',
  styleUrls: ['./projects-modal.component.scss'],
  providers: [ ProjectsService, LeadersService, SubjectsService ]
})
export class ProjectModalComponent implements OnInit {

  private id: number;
  private leaderName: string;
  public selectizeConfig: Object;
  public selectizeSubjectConfig: Object;

  constructor(
    private activeModal: NgbActiveModal,
    private leadersService: LeadersService,
    private projectsService: ProjectsService,
    private subjectsService: SubjectsService,
    private toastr: ToastrService,
    private router: Router,
    private global: Globals
  ) {
    this.leadersService.getLeadersForSelectize();
    this.selectizeSubjectConfig = global.selectizeConfig;
    this.selectizeConfig = {
      highlight: false,
      create: false,
      persist: true,
      plugins: ['dropdown_direction', 'remove_button'],
      dropdownDirection: 'down',
      labelField: 'name',
      valueField: 'id',
      searchField: ['name'],
      onChange: (value) => {
        this.subjectsService.getLeaderSubjects(+value);
      }
    };

    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
    const array = snapshot.url.split('/');
    if (array[array.length - 2] === 'edit') {
      this.id = +array[array.length - 1];
    } else {
      this.id = 0;
    }
  }

  ngOnInit() {

    this.getLeaderName();
    if (this.isLeader()) {
      this.subjectsService.getLeaderSubjects(+localStorage.getItem('userId'));
      this.projectsService.project.lead_ID = +localStorage.getItem('userId');
    }
    if (this.id) {
      this.projectsService.getProject(this.id);
    }
  }

  save(): void {
    if (this.id) {
      this.projectsService.putProject(this.projectsService.project, this.id).subscribe(data => {
        this.toastr.success('Pomyślnie zaktualizowano projekt');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas aktualizacji projektu');
        this.afterChangeData();
      });
    } else {
      this.projectsService.postProject(this.projectsService.project).subscribe(success => {
        this.toastr.success('Pomyślnie dodano projekt');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas dodawania projektu');
        this.afterChangeData();
      });
    }
  }

  afterChangeData(): void {
    this.activeModal.close();
    this.router.navigate(['../../projects']);
  }

  isLeader(): Boolean {
    return localStorage.getItem('role') === 'LEADER';
  }

  getLeaderName(): void {
    this.leaderName = localStorage.getItem('userName');
  }
}

@Component({
  selector: 'app-projects-modal',
  template: ``,
  styleUrls: ['./projects-modal.component.scss']
})
export class ProjectsModalComponent {

  constructor(private modalService: NgbModal, private router: Router) {
    this.modalService.open(ProjectModalComponent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate(['../../projects']);
    });
  }

}
