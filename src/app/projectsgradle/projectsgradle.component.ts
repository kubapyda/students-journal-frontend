import { Component, OnInit } from '@angular/core';

import { GradlesProjectService } from './../service/gradlesProject.service';

@Component({
  selector: 'app-projectsgradle',
  templateUrl: './projectsgradle.component.html',
  styleUrls: ['./projectsgradle.component.scss'],
  providers: [ GradlesProjectService ]
})
export class ProjectsgradleComponent implements OnInit {

  constructor(private gradlesProjectService: GradlesProjectService) {
    this.gradlesProjectService.getLeaderGradles(+localStorage.getItem('userId'), true);
  }

  ngOnInit() {
  }

}
