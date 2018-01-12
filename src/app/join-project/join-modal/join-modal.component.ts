import { Component, OnInit } from '@angular/core';

import { MemberInProject } from '../shared/MemberInProject';
import { MemberInProjectService } from '../shared/memberInProject.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from '../../projects/shared/projects.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-join-modal',
  templateUrl: './join-modal.component.html',
  styleUrls: ['./join-modal.component.scss'],
  providers: [ ProjectsService, MemberInProjectService ]
})
export class JoinModalsComponent implements OnInit {

  private isSent = false;

  constructor(
    private router: Router,
    public projectsService: ProjectsService,
    private memberInProjectService: MemberInProjectService,
    private toastr: ToastrService,
    private activeModal: NgbActiveModal
  ) {
    this.projectsService.getProjectsList();
  }

  ngOnInit() {
  }

  joinToProject(project: Object) {
    const keys = Object.keys(project);
    const memberToProject: MemberInProject = new MemberInProject(
      false, +localStorage.getItem('userId'), project[keys[0]], project[keys[3]]);

    this.memberInProjectService.postMemberToProject(memberToProject).subscribe(data => {
      this.toastr.success('Zadeklarowano chęć udziału w projekcie');
      this.isSent = true;
      this.afterChangeData();
    }, err => {
      this.toastr.error('Nie udało się zadeklarować udziału w projekcie');
    });
  }


  afterChangeData(): void {
    this.activeModal.close();
    this.router.navigate(['../../join-project']);
  }
}
@Component({
  selector: 'app-join-modal',
  template: ``,
  styleUrls: ['./join-modal.component.scss']
})
export class JoinModalComponent {

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) {
    this.modalService.open(JoinModalsComponent, {
      backdrop: 'static',
      windowClass: 'full-width-modal'
    }).result.then((result) => {
      this.router.navigate(['../../join-project']);
    });
  }

}
