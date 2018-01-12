import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Globals } from '../../global';
import { Injectable } from '@angular/core';
import { MemberInProject } from './MemberInProject';

@Injectable()
export class MemberInProjectService {

  private url: string;
  private requestHeader: HttpHeaders;
  public leadersForSelectize;
  public studentProjects;

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/membersinprojects`;
    this.requestHeader = new HttpHeaders({'Authorization': localStorage.getItem('token')});
  }

  getStudentListProject(id: number, isLeader: boolean) {
    return this.http.get<MemberInProject>(`${this.url}?id=${id}&isLeader=${isLeader}`, { headers: this.requestHeader });
  }

  getStudentProject(id: number, isLeader: boolean) {
    this.http.get<MemberInProject>(`${this.url}?id=${id}&isLeader=${isLeader}`, { headers: this.requestHeader }).subscribe(data => {
      this.studentProjects = data;
    });
  }

  approveMemberInProject(member: MemberInProject) {
    return this.http.put(this.url, member, { headers: this.requestHeader });
  }

  postMemberToProject(newProject: MemberInProject) {
    return this.http.post(this.url, newProject, { headers: this.requestHeader });
  }
}
