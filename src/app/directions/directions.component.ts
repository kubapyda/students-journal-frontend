import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Direction } from './shared/direction';
import { DirectionsService } from './shared/directions.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss'],
  providers: [ DirectionsService ]
})
export class DirectionsComponent implements OnInit {

  constructor(
    public directionService: DirectionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.directionService.getDirectionsList();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.directionService.getDirectionsList();
      }
    });
  }
}
