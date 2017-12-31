import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { ProjectsService } from './shared/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ ProjectsService ]
})
export class ProjectsComponent implements OnInit {

  constructor(
    public projectsService: ProjectsService,
    private router: Router) {  }

  ngOnInit() {
    this.projectsService.getProjectsList();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.projectsService.getProjectsList();
      }
    });
  }
}
