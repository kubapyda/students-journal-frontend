import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Globals } from '../../global';
import { Injectable } from '@angular/core';
import { Leader } from './leader';

@Injectable()
export class LeadersService {

  private url: string;
  public leadersList: Leader[];
  public leader: Leader = new Leader('', '', '', '', '');

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/leaders`;
  }

  getLeadersList() {
    this.http.get<Leader[]>(this.url).subscribe(data => {
      this.leadersList = data;
    });
  }

  getLeader(id: number) {
    this.http.get<Leader>(`${this.url}/${id}`).subscribe(data => {
      this.leader = data;
      console.log(this.leader);
    });
  }

  putLeader(leader: Leader, id: number) {
    return this.http.put(`${this.url}/${id}`, leader);
  }

  postLeader(leader: Leader) {
    return this.http.post(this.url, leader);
  }
}
