import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Department } from './department';
import { Globals } from '../../global';
import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentsService {

  private url: string;
  public departmentsList: Department[];
  public department: Department = new Department('');

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/departments`;
  }

  getDepartmentsList() {
    this.http.get<Department[]>(this.url).subscribe(data => {
      this.departmentsList = data;
    });
  }

  getDeparment(id: number) {
    this.http.get<Department>(`${this.url}/${id}`).subscribe(data => {
      this.department = data;
      console.log(this.department);
    });
  }

  putDepartment(department: Department, id: number) {
    return this.http.put(`${this.url}/${id}`, department);
  }

  postDepartment(department: Department) {
    return this.http.post(this.url, department);
  }
}
