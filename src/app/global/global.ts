import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  apiAddress = 'http://localhost:52007';

  selectizeConfig: Object = {
    highlight: false,
    create: false,
    persist: true,
    plugins: ['dropdown_direction', 'remove_button'],
    dropdownDirection: 'down',
    labelField: 'name',
    valueField: 'id',
    searchField: ['name']
  };

  login: Object = {
    username: '',
    password: ''
  };
}
