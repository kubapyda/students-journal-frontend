import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Direction } from './shared/direction';
import { DirectionsService } from './shared/directions.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss'],
  providers: [ DirectionsService ]
})
export class DirectionsComponent implements OnInit {

  directions: Direction[];

  constructor(
    private http: HttpClient,
    public directionService: DirectionsService,
    private toastr: ToastrService,
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
