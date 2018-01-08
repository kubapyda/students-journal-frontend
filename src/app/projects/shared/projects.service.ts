import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Globals } from '../../global';
import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable()
export class ProjectsService {

  private url: string;
  private requestHeader: HttpHeaders;
  public projectsList: Project[];
  public project: Project = new Project('');

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/projects`;
    this.requestHeader = new HttpHeaders({'Authorization': localStorage.getItem('token')});
  }

  getProjectsList() {
    this.http.get<Project[]>(this.url, { headers: this.requestHeader }).subscribe(data => {
      this.projectsList = data;
    });
  }

  getProject(id: number) {
    this.http.get<Project>(`${this.url}/${id}`, { headers: this.requestHeader }).subscribe(data => {
      this.project = data;
    });
  }

  putProject(project: Project, id: number) {
    return this.http.put(`${this.url}/${id}`, project, { headers: this.requestHeader });
  }

  postProject(project: Project) {
    return this.http.post(this.url, project, { headers: this.requestHeader });
  }
}
