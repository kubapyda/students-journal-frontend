import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterStateSnapshot } from '@angular/router';

import { AdministratorsService } from './../shared/administrators.service';
import { Globals } from '../../global';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-administrator-modal-component',
  templateUrl: './administrators-modal.component.html',
  styleUrls: ['./administrators-modal.component.scss'],
  providers: [ AdministratorsService ]
})
export class AdministratorModalComponent implements OnInit {

  private id: number;

  constructor(
    private activeModal: NgbActiveModal,
    private administratorsService: AdministratorsService,
    private toastr: ToastrService,
    private router: Router,
    private global: Globals
  ) {
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
      this.administratorsService.getAdministrator(this.id);
    }
  }

  save(): void {
    if (this.id) {
      this.administratorsService.putAdministrator(this.administratorsService.administrator, this.id).subscribe(data => {
        this.toastr.success('Pomyślnie zaktualizowano administratora');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas aktualizacji administratora');
        this.afterChangeData();
      });
    } else {
      this.administratorsService.postAdministrator(this.administratorsService.administrator).subscribe(success => {
        this.toastr.success('Pomyślnie dodano administratora');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas dodawania administratora');
        this.afterChangeData();
      });
    }
  }

  afterChangeData(): void {
    this.activeModal.close();
    this.router.navigate(['../../administrators']);
  }
}

@Component({
  selector: 'app-administrators-modal',
  template: ``,
  styleUrls: ['./administrators-modal.component.scss']
})
export class AdministratorsModalComponent {

  constructor(private modalService: NgbModal, private router: Router) {
    this.modalService.open(AdministratorModalComponent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate(['../../administrators']);
    });
  }

}
