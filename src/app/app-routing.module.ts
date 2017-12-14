import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { StudentModalComponent } from './students/student-modal/student-modal.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent,
    children: [
      { path: 'edit', component: StudentModalComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
