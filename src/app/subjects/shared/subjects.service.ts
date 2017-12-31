import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Globals } from '../../global';
import { Injectable } from '@angular/core';
import { Subject } from './subject';

@Injectable()
export class SubjectsService {

  private url: string;
  public subjectsList: Subject[];
  public subject: Subject = new Subject('');
  public leaderSubject;
  public isSelectizeEnable = false;

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/subjects`;
  }

  getSubjectsList() {
    this.http.get<Subject[]>(this.url).subscribe(data => {
      this.subjectsList = data;
    });
  }

  getLeaderSubjects(id: number) {
    this.url = `${this.global.apiAddress}/api/selectize/${id}`;
    this.http.get(this.url).subscribe(data => {
      this.leaderSubject = data;
      this.isSelectizeEnable = true;
    });
  }

  getSubject(id: number) {
    this.http.get<Subject>(`${this.url}/${id}`).subscribe(data => {
      this.subject = data;
    });
  }

  putSubject(subject: Subject, id: number) {
    return this.http.put(`${this.url}/${id}`, subject);
  }

  postSubject(subject: Subject) {
    return this.http.post(this.url, subject);
  }
}
