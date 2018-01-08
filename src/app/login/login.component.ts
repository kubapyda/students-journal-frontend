import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { Globals } from './../global';
import { HttpClient } from '@angular/common/http';
import { Login } from './../shared/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {

  public loginData: Login = new Login('', '');

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginData).subscribe(data => {
      const keys = Object.keys(data);
      localStorage.setItem('token', data[keys[1]] + ' ' + data[keys[0]]);
      this.authService.role(this.loginData).subscribe(role => {
        const roleKeys = Object.keys(role[0]);
        localStorage.setItem('userId', role[0][roleKeys[0]]);
        localStorage.setItem('userName', role[0][roleKeys[1]]);
        localStorage.setItem('role', role[0][roleKeys[2]]);
        const userRole = role[0][roleKeys[2]];
        if (userRole === 'ADMINISTRATOR') {
          this.router.navigate(['../../directions']);
        } else if (userRole === 'LEADER') {
          this.router.navigate(['../../projects-gradle']);
        } else if (userRole === 'USER') {
          this.router.navigate(['../../join-project']);
        }
      });
    }, err => {
      console.log(err);
    });
  }

}
