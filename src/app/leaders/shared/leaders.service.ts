import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Globals } from '../../global';
import { Injectable } from '@angular/core';
import { Leader } from './leader';

@Injectable()
export class LeadersService {

  private url: string;
  private requestHeader: HttpHeaders;
  public leadersList: Leader[];
  public leadersForSelectize;
  public leader: Leader = new Leader('', '', '', '', '');

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/leaders`;
    this.requestHeader = new HttpHeaders({'Authorization': localStorage.getItem('token')});
  }

  getLeadersList() {
    this.http.get<Leader[]>(this.url, { headers: this.requestHeader }).subscribe(data => {
      this.leadersList = data;
    });
  }

  getLeadersForSelectize() {
    this.url = `${this.global.apiAddress}/api/selectize`;
    this.http.get(this.url).subscribe(data => {
      this.leadersForSelectize = data;
    });
  }

  getLeader(id: number) {
    this.http.get<Leader>(`${this.url}/${id}`, { headers: this.requestHeader }).subscribe(data => {
      this.leader = data;
    });
  }

  putLeader(leader: Leader, id: number) {
    return this.http.put(`${this.url}/${id}`, leader, { headers: this.requestHeader });
  }

  postLeader(leader: Leader) {
    return this.http.post(this.url, leader, { headers: this.requestHeader });
  }
}
