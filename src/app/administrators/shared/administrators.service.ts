import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Administrator } from './administrator';
import { Globals } from '../../global';
import { Injectable } from '@angular/core';

@Injectable()
export class AdministratorsService {

  private url: string;
  public administratorsList: Administrator[];
  public administrator: Administrator = new Administrator('', '', '', '');

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/administrators`;
  }

  getAdministratorsList() {
    this.http.get<Administrator[]>(this.url).subscribe(data => {
      this.administratorsList = data;
    });
  }

  getAdministrator(id: number) {
    this.http.get<Administrator>(`${this.url}/${id}`).subscribe(data => {
      this.administrator = data;
      console.log(this.administrator);
    });
  }

  putAdministrator(admin: Administrator, id: number) {
    return this.http.put(`${this.url}/${id}`, admin);
  }

  postAdministrator(admin: Administrator) {
    return this.http.post(this.url, admin);
  }
}
