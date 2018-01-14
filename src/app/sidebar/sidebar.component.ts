import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  private menuItem = [
    {
      link: '/directions',
      name: 'Wydziały',
      auth: 'ADMINISTRATOR',
      active: true
    }, {
      link: '/departments',
      name: 'Kierunki studiów',
      auth: 'ADMINISTRATOR',
      active: false
    }, {
      link: '/deangroup',
      name: 'Grupy dziekańskie',
      auth: 'ADMINISTRATOR',
      active: false
    }, {
      link: '/projects',
      name: 'Projekty',
      auth: 'ADMINISTRATOR',
      active: false
    }, {
      link: '/students',
      name: 'Studenci',
      auth: 'ADMINISTRATOR',
      active: false
    }, {
      link: '/leaders',
      name: 'Prowadzący',
      auth: 'ADMINISTRATOR',
      active: false
    }, {
      link: '/subjects',
      name: 'Przedmioty',
      auth: 'ADMINISTRATOR',
      active: false
    }, {
      link: '/administrators',
      name: 'Administratorzy',
      auth: 'ADMINISTRATOR',
      active: false
    }, {
      link: '/subjects-gradle',
      name: 'Oceny z przedmiotów',
      auth: 'LEADER',
      active: true
    }, {
      link: '/projects-gradle',
      name: 'Oceny z projektów',
      auth: 'LEADER',
      active: false
    }, {
      link: '/projects',
      name: 'Dodaj projekt',
      auth: 'LEADER',
      active: false
    }, {
      link: '/projects-member',
      name: 'Członkowie projektów',
      auth: 'LEADER',
      active: false
    }, {
      link: '/students',
      name: 'Dodaj usuń studenta',
      auth: 'LEADER',
      active: false
    }, {
      link: '/subjects-gradle-view',
      name: 'Oceny z przedmiotów',
      auth: 'USER',
      active: true
    }, {
      link: '/project-gradle-view',
      name: 'Oceny z projektów',
      auth: 'USER',
      active: false
    }, {
      link: '/join-project',
      name: 'Dołącz do projektu',
      auth: 'USER',
      active: true
    },
  ];

  constructor(
    private authService: AuthService
  ) {}

  isAuthenticated(item: Object) {
    const keys = Object.keys(item);
    return localStorage.getItem('role') === item[keys[2]];
  }

  isAuthenticatedLogout() {
    if (localStorage.getItem('token')) {
      return true;
    }
  }

  isActive(item: Object) {
    const key = Object.keys(item);
    for (let i = 0; i < this.menuItem.length; i++) {
      if (this.menuItem[i].active) {
        this.menuItem[i].active = false;
      }
    }
    item[key[3]] = true;
  }

  logout() {
    this.authService.logout();
  }

}

