import { DeanGroupModalComponent, DeanGroupsModalComponent } from './dean-group/dean-group-modal/dean-group-modal.component';
import { DeleteModalComponent, DeletedModalComponent } from './delete-modal/delete-modal.component';
import { DeparmentModalComponent, DeparmentsModalComponent } from './departments/deparments-modal/deparments-modal.component';
import { DirectionModalComponent, DirectionsModalComponent } from './directions/direction-modal/direction-modal.component';
import { StudentsModalComponent, StudentModalComponent } from './students/student-modal/student-modal.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DeanGroupComponent } from './dean-group/dean-group.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DirectionsComponent } from './directions/directions.component';
import { FormsModule } from '@angular/forms';
import { Globals } from './global';
import { HelpersService } from './helpers.service';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { NgModule } from '@angular/core';
import { NgSelectizeModule } from 'ng-selectize';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsComponent } from './students/students.component';
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
    DeanGroupsModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule,
    FormsModule,
    NgSelectizeModule
  ],
  entryComponents: [
    StudentsModalComponent,
    DirectionsModalComponent,
    DeletedModalComponent,
    DeparmentModalComponent,
    DeanGroupModalComponent
  ],
  providers: [
    Globals,
    HelpersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
