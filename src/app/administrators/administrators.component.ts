import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AdministratorsService } from './shared/administrators.service';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.scss'],
  providers: [ AdministratorsService ]
})
export class AdministratorsComponent implements OnInit {

  constructor(
    public administratorsService: AdministratorsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.administratorsService.getAdministratorsList();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.administratorsService.getAdministratorsList();
      }
    });
  }

}
