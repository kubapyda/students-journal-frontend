import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministratorsComponent } from './administrators/administrators.component';
import { AdministratorsModalComponent } from './administrators/administrators-modal/administrators-modal.component';
import { DeanGroupComponent } from './dean-group/dean-group.component';
import { DeanGroupsModalComponent } from './dean-group/dean-group-modal/dean-group-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { DeparmentsModalComponent } from './departments/deparments-modal/deparments-modal.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DirectionModalComponent } from './directions/direction-modal/direction-modal.component';
import { DirectionsComponent } from './directions/directions.component';
import { LeadersComponent } from './leaders/leaders.component';
import { LeadersModalComponent } from './leaders/leaders-modal/leaders-modal.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsModalComponent } from './projects/projects-modal/projects-modal.component';
import { StudentModalComponent } from './students/student-modal/student-modal.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsModalComponent } from './subjects/subjects-modal/subjects-modal.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      {
        path: 'add',
        component: StudentModalComponent
      },
      {
        path: 'edit/:id',
        component: StudentModalComponent
      },
      {
        path: 'delete',
        component: DeleteModalComponent,
        data: {
          title: 'studenta',
          state: 'students'
        }
      }
    ]
  },
  {
    path: 'directions',
    component: DirectionsComponent,
    children: [
      {
        path: 'add',
        component: DirectionModalComponent
      },
      {
        path: 'edit/:id',
        component: DirectionModalComponent
      },
      {
        path: 'delete',
        component: DeleteModalComponent,
        data: {
          title: 'wydział',
          state: 'directions'
        }
      }
    ]
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
    children: [
      {
        path: 'add',
        component: DeparmentsModalComponent
      },
      {
        path: 'edit/:id',
        component: DeparmentsModalComponent
      },
      {
        path: 'delete',
        component: DeleteModalComponent,
        data: {
          title: 'kierunek studiów',
          state: 'departments'
        }
      }
    ]
  },
  {
    path: 'deangroup',
    component: DeanGroupComponent,
    children: [
      {
        path: 'add',
        component: DeanGroupsModalComponent
      },
      {
        path: 'edit/:id',
        component: DeanGroupsModalComponent
      },
      {
        path: 'delete',
        component: DeleteModalComponent,
        data: {
          title: 'grupę dziekańską',
          state: 'deangroup'
        }
      }
    ]
  },
  {
    path: 'administrators',
    component: AdministratorsComponent,
    children: [
      {
        path: 'add',
        component: AdministratorsModalComponent
      },
      {
        path: 'edit/:id',
        component: AdministratorsModalComponent
      },
      {
        path: 'delete',
        component: DeleteModalComponent,
        data: {
          title: 'administratora',
          state: 'administrators'
        }
      }
    ]
  },
  {
    path: 'leaders',
    component: LeadersComponent,
    children: [
      {
        path: 'add',
        component: LeadersModalComponent
      },
      {
        path: 'edit/:id',
        component: LeadersModalComponent
      },
      {
        path: 'delete',
        component: DeleteModalComponent,
        data: {
          title: 'prowadzącego',
          state: 'leaders'
        }
      }
    ]
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
    children: [
      {
        path: 'add',
        component: SubjectsModalComponent
      },
      {
        path: 'edit/:id',
        component: SubjectsModalComponent
      },
      {
        path: 'delete',
        component: DeleteModalComponent,
        data: {
          title: 'przedmiot',
          state: 'subjects'
        }
      }
    ]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      {
        path: 'add',
        component: ProjectsModalComponent
      },
      {
        path: 'edit/:id',
        component: ProjectsModalComponent
      },
      {
        path: 'delete',
        component: DeleteModalComponent,
        data: {
          title: 'projekt',
          state: 'projects'
        }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
