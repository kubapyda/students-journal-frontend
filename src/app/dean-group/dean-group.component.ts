import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { DeanGroupService } from './shared/dean-group.service';

@Component({
  selector: 'app-dean-group',
  templateUrl: './dean-group.component.html',
  styleUrls: ['./dean-group.component.scss'],
  providers: [ DeanGroupService ]
})
export class DeanGroupComponent implements OnInit {

  constructor(
    public deanGroupService: DeanGroupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.deanGroupService.getDeanGroupsList();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.deanGroupService.getDeanGroupsList();
      }
    });
  }

}
