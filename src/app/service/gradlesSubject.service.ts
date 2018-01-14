import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Globals } from './../global/global';
import { GradleProject } from './../global/gradleProject';
import { GradleSubject } from './../global/gradleSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class GradlesSubjectService {

  private url: string;
  private requestHeader: HttpHeaders;
  public gradlesProject: GradleSubject[];
  public leadersForSelectize;
  public studentProjects;

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/gradlessubjects`;
    this.requestHeader = new HttpHeaders({'Authorization': localStorage.getItem('token')});
  }

  getLeaderSubjectGradles(id: number, isLeader: boolean) {
    this.http.get<GradleSubject[]>(`${this.url}?id=${id}&isLeader=${isLeader}`, { headers: this.requestHeader }).subscribe(data => {
      this.gradlesProject = data;
    });
  }

  saveGradleForSubject(newGradle: GradleProject, newGradleSubject: GradleSubject) {
    const gradle = newGradle ? newGradle : newGradleSubject;
    return this.http.post(this.url, gradle, { headers: this.requestHeader });
  }
}
