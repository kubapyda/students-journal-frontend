import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DeanGroup } from './dean-group';
import { Globals } from '../../global';
import { Injectable } from '@angular/core';

@Injectable()
export class DeanGroupService {

  private url: string;
  public deanGroupList: DeanGroup[];
  public deanGroup: DeanGroup = new DeanGroup('');

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/deangroups`;
  }

  getDeanGroupsList() {
    this.http.get<DeanGroup[]>(this.url).subscribe(data => {
      this.deanGroupList = data;
    });
  }

  getDeanGroup(id: number) {
    this.http.get<DeanGroup>(`${this.url}/${id}`).subscribe(data => {
      this.deanGroup = data;
    });
  }

  putDeanGroup(department: DeanGroup, id: number) {
    return this.http.put(`${this.url}/${id}`, department);
  }

  postDeanGroup(department: DeanGroup) {
    return this.http.post(this.url, department);
  }
}
