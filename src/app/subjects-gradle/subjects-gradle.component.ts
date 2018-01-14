import { Component, OnInit } from '@angular/core';

import { GradlesSubjectService } from './../service/gradlesSubject.service';

@Component({
  selector: 'app-subjects-gradle',
  templateUrl: './subjects-gradle.component.html',
  styleUrls: ['./subjects-gradle.component.scss'],
  providers: [ GradlesSubjectService ]
})
export class SubjectsGradleComponent implements OnInit {

  constructor(private gradlesSubjectService: GradlesSubjectService) {
    this.gradlesSubjectService.getLeaderSubjectGradles(+localStorage.getItem('userId'), true);
  }

  ngOnInit() {
  }

}
