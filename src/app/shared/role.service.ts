import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router
} from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const roles = route.data['roles'];
    return localStorage.getItem('role') === roles;
  }
}
