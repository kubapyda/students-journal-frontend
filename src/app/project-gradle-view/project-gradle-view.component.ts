import { Component, OnInit } from '@angular/core';

import { GradlesProjectService } from '../shared/gradlesProject.service';

@Component({
  selector: 'app-project-gradle-view',
  templateUrl: './project-gradle-view.component.html',
  styleUrls: ['./project-gradle-view.component.scss'],
  providers: [ GradlesProjectService ]
})
export class ProjectGradleViewComponent implements OnInit {

  constructor(private gradlesProjectService: GradlesProjectService) {
    this.gradlesProjectService.getLeaderGradles(+localStorage.getItem('userId'), false);
  }

  ngOnInit() {
  }

}
