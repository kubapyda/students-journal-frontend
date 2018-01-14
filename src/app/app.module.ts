import {
  AdministratorModalComponent,
  AdministratorsModalComponent
} from './administrators/administrators-modal/administrators-modal.component';
import { DeanGroupModalComponent, DeanGroupsModalComponent } from './dean-group/dean-group-modal/dean-group-modal.component';
import { DeleteModalComponent, DeletedModalComponent } from './delete-modal/delete-modal.component';
import { DeparmentModalComponent, DeparmentsModalComponent } from './departments/deparments-modal/deparments-modal.component';
import { DirectionModalComponent, DirectionsModalComponent } from './directions/direction-modal/direction-modal.component';
import { JoinModalComponent, JoinModalsComponent } from './join-project/join-modal/join-modal.component';
import { LeaderModalComponent, LeadersModalComponent } from './leaders/leaders-modal/leaders-modal.component';
import {
  ProjectGradleModalComponent,
  ProjectsGradleModalComponent
} from './projectsgradle/projects-gradle-modal/projects-gradle-modal.component';
import { ProjectModalComponent, ProjectsModalComponent } from './projects/projects-modal/projects-modal.component';
import { StudentModalComponent, StudentsModalComponent } from './students/student-modal/student-modal.component';
import {
  SubjectGradleModalComponent,
  SubjectsGradleModalComponent
} from './subjects-gradle/subjects-gradle-modal/subjects-gradle-modal.component';
import { SubjectModalComponent, SubjectsModalComponent } from './subjects/subjects-modal/subjects-modal.component';

import { AdministratorsComponent } from './administrators/administrators.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './service/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DeanGroupComponent } from './dean-group/dean-group.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DirectionsComponent } from './directions/directions.component';
import { FormsModule } from '@angular/forms';
import { Globals } from './global/global';
import { HelpersService } from './service/helpers.service';
import { HttpClientModule } from '@angular/common/http';
import { JoinProjectComponent } from './join-project/join-project.component';
import { LeadersComponent } from './leaders/leaders.component';
import { LoginComponent } from './login/login.component';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { NgModule } from '@angular/core';
import { NgSelectizeModule } from 'ng-selectize';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectGradleViewComponent } from './project-gradle-view/project-gradle-view.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsMemberComponent } from './projects-member/projects-member.component';
import { ProjectsgradleComponent } from './projectsgradle/projectsgradle.component';
import { RoleGuardService } from './service/role.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsGradleComponent } from './subjects-gradle/subjects-gradle.component';
import { SubjectsGradleViewComponent } from './subjects-gradle-view/subjects-gradle-view.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentModalComponent,
    StudentsModalComponent,
    DirectionsComponent,
    DirectionModalComponent,
    DirectionsModalComponent,
    DepartmentsComponent,
    DeleteModalComponent,
    DeletedModalComponent,
    DeparmentsModalComponent,
    DeparmentModalComponent,
    DeanGroupComponent,
    DeanGroupModalComponent,
    DeanGroupsModalComponent,
    AdministratorsComponent,
    AdministratorsModalComponent,
    AdministratorModalComponent,
    LeadersComponent,
    LeadersModalComponent,
    LeaderModalComponent,
    SubjectsComponent,
    SubjectsModalComponent,
    SubjectModalComponent,
    ProjectsComponent,
    ProjectsModalComponent,
    ProjectModalComponent,
    LoginComponent,
    SidebarComponent,
    ProjectsgradleComponent,
    JoinProjectComponent,
    JoinModalComponent,
    JoinModalsComponent,
    ProjectsMemberComponent,
    ProjectsGradleModalComponent,
    ProjectGradleModalComponent,
    ProjectGradleViewComponent,
    SubjectsGradleComponent,
    SubjectsGradleModalComponent,
    SubjectGradleModalComponent,
    SubjectsGradleViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NgbModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule,
    FormsModule,
    NgSelectizeModule,
    NgbDatepickerModule
  ],
  entryComponents: [
    StudentsModalComponent,
    DirectionsModalComponent,
    DeletedModalComponent,
    DeparmentModalComponent,
    DeanGroupModalComponent,
    AdministratorModalComponent,
    LeaderModalComponent,
    SubjectModalComponent,
    ProjectModalComponent,
    JoinModalsComponent,
    ProjectGradleModalComponent,
    SubjectGradleModalComponent
  ],
  providers: [
    Globals,
    HelpersService,
    RoleGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
