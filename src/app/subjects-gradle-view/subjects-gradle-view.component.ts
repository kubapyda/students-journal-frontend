import { Component, OnInit } from '@angular/core';

import { GradlesSubjectService } from '../service/gradlesSubject.service';

@Component({
  selector: 'app-subjects-gradle-view',
  templateUrl: './subjects-gradle-view.component.html',
  styleUrls: ['./subjects-gradle-view.component.scss'],
  providers: [ GradlesSubjectService ]
})
export class SubjectsGradleViewComponent implements OnInit {

  constructor(private gradlesSubjectService: GradlesSubjectService) {
    this.gradlesSubjectService.getLeaderSubjectGradles(+localStorage.getItem('userId'), false);
  }

  ngOnInit() {
  }

}
