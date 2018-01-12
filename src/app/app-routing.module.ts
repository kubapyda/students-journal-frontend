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
import { JoinModalComponent } from './join-project/join-modal/join-modal.component';
import { JoinProjectComponent } from './join-project/join-project.component';
import { LeadersComponent } from './leaders/leaders.component';
import { LeadersModalComponent } from './leaders/leaders-modal/leaders-modal.component';
import { LoginComponent } from './login/login.component';
import { ProjectGradleViewComponent } from './project-gradle-view/project-gradle-view.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsGradleModalComponent } from './projectsgradle/projects-gradle-modal/projects-gradle-modal.component';
import { ProjectsMemberComponent } from './projects-member/projects-member.component';
import { ProjectsModalComponent } from './projects/projects-modal/projects-modal.component';
import { ProjectsgradleComponent } from './projectsgradle/projectsgradle.component';
import { RoleGuardService } from './shared/role.service';
import { StudentModalComponent } from './students/student-modal/student-modal.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsGradleComponent } from './subjects-gradle/subjects-gradle.component';
import { SubjectsGradleModalComponent } from './subjects-gradle/subjects-gradle-modal/subjects-gradle-modal.component';
import { SubjectsGradleViewComponent } from './subjects-gradle-view/subjects-gradle-view.component';
import { SubjectsModalComponent } from './subjects/subjects-modal/subjects-modal.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'students',
    component: StudentsComponent,
    canActivate: [ RoleGuardService ],
    data: {
      roles: ['ADMINISTRATOR', 'LEADER']
    },
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
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'ADMINISTRATOR'
    },
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
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'ADMINISTRATOR'
    },
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
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'ADMINISTRATOR'
    },
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
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'ADMINISTRATOR'
    },
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
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'ADMINISTRATOR'
    },
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
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'ADMINISTRATOR'
    },
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
    canActivate: [ RoleGuardService ],
    data: {
      roles: ['ADMINISTRATOR', 'LEADER']
    },
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
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'projects-gradle',
    component: ProjectsgradleComponent,
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'LEADER'
    },
    children: [
      {
        path: 'exhibitions',
        component: ProjectsGradleModalComponent
      }
    ]
  }, {
    path: 'join-project',
    component: JoinProjectComponent,
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'USER'
    },
    children: [
      {
        path: 'join',
        component: JoinModalComponent
      }
    ]
  }, {
    path: 'projects-member',
    component: ProjectsMemberComponent,
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'LEADER'
    }
  }, {
    path: 'project-gradle-view',
    component: ProjectGradleViewComponent,
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'USER'
    }
  }, {
    path: 'subjects-gradle',
    component: SubjectsGradleComponent,
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'LEADER'
    },
    children: [
      {
        path: 'exhibitions',
        component: SubjectsGradleModalComponent
      }
    ]
  }, {
    path: 'subjects-gradle-view',
    component: SubjectsGradleViewComponent,
    canActivate: [ RoleGuardService ],
    data: {
      roles: 'USER'
    }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
