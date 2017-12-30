import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { SubjectsService } from './shared/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
  providers: [ SubjectsService ]
})
export class SubjectsComponent implements OnInit {

  constructor(
    public subjectsService: SubjectsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subjectsService.getSubjectsList();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.subjectsService.getSubjectsList();
      }
    });
  }

}
