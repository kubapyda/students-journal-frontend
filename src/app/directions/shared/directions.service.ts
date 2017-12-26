import { Headers, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Direction } from './direction';
import { Globals } from '../../global';
import { Injectable } from '@angular/core';

@Injectable()
export class DirectionsService {

  private url: string;
  public directionsList: Direction[];
  public direction: Direction = new Direction('');

  constructor(private http: HttpClient, private global: Globals) {
    this.url = `${global.apiAddress}/api/directions`;
  }

  getDirectionsList() {
    this.http.get<Direction[]>(this.url).subscribe(data => {
      this.directionsList = data;
    });
  }

  getDirection(id: number) {
    this.http.get<Direction>(`${this.url}/${id}`).subscribe(data => {
      this.direction = data;
    });
  }

  putDirection(direction: Direction, id: number) {
    return this.http.put(`${this.url}/${id}`, direction);
  }

  postDirection(direction: Direction) {
    return this.http.post(this.url, direction);
  }
}
