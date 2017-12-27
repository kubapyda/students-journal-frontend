import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { DeparmentsModalComponent } from './departments/deparments-modal/deparments-modal.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DirectionModalComponent } from './directions/direction-modal/direction-modal.component';
import { DirectionsComponent } from './directions/directions.component';
import { StudentModalComponent } from './students/student-modal/student-modal.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      {
        path: 'edit',
        component: StudentModalComponent
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
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
