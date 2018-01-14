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
    const role = localStorage.getItem('role');
    if (Array.isArray(roles)) {
      for (let i = 0; i < roles.length; i++) {
        if (role === roles[i]) {
          return true;
        }
      }
      return false;
    } else {
      return localStorage.getItem('role') === roles;
    }
  }
}
