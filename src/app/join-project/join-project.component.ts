import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { MemberInProjectService } from './shared/memberInProject.service';

@Component({
  selector: 'app-join-project',
  templateUrl: './join-project.component.html',
  styleUrls: ['./join-project.component.scss'],
  providers: [ MemberInProjectService ]
})
export class JoinProjectComponent implements OnInit {

  constructor(private memberInProjectService: MemberInProjectService, private router: Router) {
    this.memberInProjectService.getStudentProject(+localStorage.getItem('userId'), true);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.memberInProjectService.getStudentProject(+localStorage.getItem('userId'), true);
      }
    });
  }

  ngOnInit() {
  }

}
