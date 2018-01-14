import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Globals } from './../global/global';
import { Injectable } from '@angular/core';
import { Login } from './../global/login';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { URLSearchParams } from '@angular/http/src/url_search_params';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private globals: Globals
  ) {}

  login(loginData: Login) {
    const requestHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const data = `username=${loginData.username}&password=${loginData.password}&grant_type=password`;
    return this.http.post(`${this.globals.apiAddress}/token`, data);
  }

  logout() {
    localStorage.clear();
  }

  role(loginData: Login) {
    const url = `${this.globals.apiAddress}/api/login?username=${loginData.username}&password=${loginData.password}`;
    return this.http.get(url);
  }
}
