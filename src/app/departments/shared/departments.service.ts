import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Department } from './department';
import { Globals } from './../../global/global';
import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentsService {

  private url: string;
  private requestHeader: HttpHeaders;
  public departmentsList: Department[];
  public department: Department = new Department('');

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/departments`;
    this.requestHeader = new HttpHeaders({'Authorization': localStorage.getItem('token')});
  }

  getDepartmentsList() {
    this.http.get<Department[]>(this.url, { headers: this.requestHeader }).subscribe(data => {
      this.departmentsList = data;
    });
  }

  getDeparment(id: number) {
    this.http.get<Department>(`${this.url}/${id}`, { headers: this.requestHeader }).subscribe(data => {
      this.department = data;
    });
  }

  putDepartment(department: Department, id: number) {
    return this.http.put(`${this.url}/${id}`, department, { headers: this.requestHeader });
  }

  postDepartment(department: Department) {
    return this.http.post(this.url, department, { headers: this.requestHeader });
  }
}
