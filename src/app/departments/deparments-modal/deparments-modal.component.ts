import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

import { DepartmentsService } from '../shared/departments.service';
import { DirectionsService } from '../../directions/shared/directions.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deparments-modal',
  templateUrl: './deparments-modal.component.html',
  styleUrls: ['./deparments-modal.component.scss'],
  providers: [ DepartmentsService, DirectionsService ]
})
export class DeparmentModalComponent implements OnInit {

  private id: number;
  public selectizeConfig: Object;

  constructor(
    private activeModal: NgbActiveModal,
    private departmentsService: DepartmentsService,
    private directionsService: DirectionsService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.directionsService.getDirectionsList();

    this.selectizeConfig = {
      highlight: false,
      create: false,
      persist: true,
      plugins: ['dropdown_direction', 'remove_button'],
      dropdownDirection: 'down',
      labelField: 'name',
      valueField: 'id',
      searchField: ['name']
    };

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
      this.departmentsService.getDeparment(this.id);
    }
  }

  save(): void {
    if (this.id) {
      this.departmentsService.putDepartment(this.departmentsService.department, this.id).subscribe(data => {
        this.toastr.success('Pomyślnie zaktualizowano kierunek studiów');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas aktualizacji kierunku studiów');
        this.afterChangeData();
      });
    } else {
      this.departmentsService.postDepartment(this.departmentsService.department).subscribe(success => {
        this.toastr.success('Pomyślnie dodano kierunek studiów');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas dodawania kierunku studiów');
        this.afterChangeData();
      });
    }
  }

  afterChangeData(): void {
    this.activeModal.close();
    this.router.navigate(['../../departments']);
  }

}

@Component({
  selector: 'app-deparments-modal',
  template: ``,
  styleUrls: ['./deparments-modal.component.scss']
})
export class DeparmentsModalComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) {
    this.modalService.open(DeparmentModalComponent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate(['../../departments']);
    });
  }

  ngOnInit() {
  }

}
