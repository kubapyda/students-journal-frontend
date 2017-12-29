import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Globals } from '../../global';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable()
export class StudentsService {

  private url: string;
  public studentsList: Student[];
  public student: Student = new Student('', '', '', '', '');

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/students`;
  }

  getStudentsList() {
    this.http.get<Student[]>(this.url).subscribe(data => {
      this.studentsList = data;
    });
  }

  getStudent(id: number) {
    this.http.get<Student>(`${this.url}/${id}`).subscribe(data => {
      this.student = data;
    });
  }

  putStudent(student: Student, id: number) {
    return this.http.put(`${this.url}/${id}`, student);
  }

  postStudent(student: Student) {
    return this.http.post(this.url, student);
  }
}
