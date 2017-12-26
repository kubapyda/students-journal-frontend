import { Globals } from './global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HelpersService {

  private properties = new Subject<any>();

  constructor(
    private http: HttpClient,
    private globals: Globals
  ) {}

  saveProperties(property: object) {
    this.properties.next(property);
  }

  getProperties(): Observable<any> {
    return this.properties.asObservable();
  }

  deleteElement(id: number, entity: string) {
    return this.http.delete(`${this.globals.apiAddress}/api/${entity}/${id}`);
  }
}
