import { Component, OnInit } from '@angular/core';

import { MemberInProject } from './../global/MemberInProject';
import { MemberInProjectService } from './../service/memberInProject.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects-member',
  templateUrl: './projects-member.component.html',
  styleUrls: ['./projects-member.component.scss'],
  providers: [ MemberInProjectService ]
})
export class ProjectsMemberComponent implements OnInit {

  constructor(
    private memberInProjectService: MemberInProjectService,
    private toastr: ToastrService
  ) {
    this.memberInProjectService.getStudentProject(+localStorage.getItem('userId'), false);
  }

  ngOnInit() {
  }

  approve(project: Object) {
    const keys = Object.keys(project);
    const memberToProject: MemberInProject = new MemberInProject(
      true, project[keys[3]], project[keys[1]], project[keys[4]]);

    this.memberInProjectService.approveMemberInProject(memberToProject).subscribe(data => {
      this.toastr.success('Zatwierdzono udział studenta w projekcie');
      this.memberInProjectService.getStudentProject(+localStorage.getItem('userId'), false);
    }, err => {
      this.toastr.error('Zatwierdzanie nie powiodło się');
    });
  }

}
