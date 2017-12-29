import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterStateSnapshot } from '@angular/router';

import { DeanGroupService } from '../shared/dean-group.service';
import { DepartmentsService } from '../../departments/shared/departments.service';
import { Globals } from './../../global';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dean-group-modal',
  templateUrl: './dean-group-modal.component.html',
  styleUrls: ['./dean-group-modal.component.scss'],
  providers: [ DeanGroupService, DepartmentsService ]
})
export class DeanGroupModalComponent implements OnInit {

  private id: number;
  public selectizeConfig: Object;

  constructor(
    private activeModal: NgbActiveModal,
    private deanGroupService: DeanGroupService,
    private departmentsService: DepartmentsService,
    private toastr: ToastrService,
    private router: Router,
    private global: Globals
  ) {
    this.departmentsService.getDepartmentsList();
    this.selectizeConfig = global.selectizeConfig;

    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
    const array = snapshot.url.split('/');
    if (array[array.length - 2] === 'edit') {
      this.id = +array[array.length - 1];
    } else {
      this.id = 0;
    }
  }

  ngOnInit() {
    if (this.id) {
      this.deanGroupService.getDeanGroup(this.id);
    }
  }

  save(): void {
    if (this.id) {
      this.deanGroupService.putDeanGroup(this.deanGroupService.deanGroup, this.id).subscribe(data => {
        this.toastr.success('Pomyślnie zaktualizowano grupę dziekańską');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas aktualizacji grupy dziekańskiej');
        this.afterChangeData();
      });
    } else {
      this.deanGroupService.postDeanGroup(this.deanGroupService.deanGroup).subscribe(success => {
        this.toastr.success('Pomyślnie dodano grupę dziakańską');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas dodawania grupy dziekańskiej');
        this.afterChangeData();
      });
    }
  }

  afterChangeData(): void {
    this.activeModal.close();
    this.router.navigate(['../../deangroup']);
  }
}

@Component({
  selector: 'app-dean-groups-modal',
  template: ``,
  styleUrls: ['./dean-group-modal.component.scss']
})
export class DeanGroupsModalComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) {
    this.modalService.open(DeanGroupModalComponent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate(['../../deangroup']);
    });
  }

  ngOnInit() {
  }

}
