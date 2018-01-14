import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Globals } from './../global/global';
import { GradleProject } from './../global/gradleProject';
import { Injectable } from '@angular/core';

@Injectable()
export class GradlesProjectService {

  private url: string;
  private requestHeader: HttpHeaders;
  public gradlesProject: GradleProject[];
  public leadersForSelectize;
  public studentProjects;

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/gradlesprojects`;
    this.requestHeader = new HttpHeaders({'Authorization': localStorage.getItem('token')});
  }

  getLeaderGradles(id: number, isLeader: boolean) {
    this.http.get<GradleProject[]>(`${this.url}?id=${id}&isLeader=${isLeader}`, { headers: this.requestHeader }).subscribe(data => {
      this.gradlesProject = data;
    });
  }

  saveGradleForProject(newGradle: GradleProject) {
    return this.http.post(this.url, newGradle, { headers: this.requestHeader });
  }
}
