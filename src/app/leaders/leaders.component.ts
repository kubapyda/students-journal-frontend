import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { LeadersService } from './shared/leaders.service';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss'],
  providers: [ LeadersService ]
})
export class LeadersComponent implements OnInit {

  constructor(
    public leadersService: LeadersService,
    private router: Router) {  }

  ngOnInit() {
    this.leadersService.getLeadersList();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.leadersService.getLeadersList();
      }
    });
  }

}
