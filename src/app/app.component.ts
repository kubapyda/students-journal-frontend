import { Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';
import { RouterState } from '@angular/router/src/router_state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  isAuthenticated() {
    return localStorage.getItem('token') !== undefined;
  }
}
