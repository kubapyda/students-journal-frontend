import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { DepartmentsService } from './shared/departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
  providers: [ DepartmentsService ]
})
export class DepartmentsComponent implements OnInit {

  constructor(
    public departmentsService: DepartmentsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.departmentsService.getDepartmentsList();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.departmentsService.getDepartmentsList();
      }
    });
  }

}
