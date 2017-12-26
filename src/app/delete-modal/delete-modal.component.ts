import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HelpersService } from './../helpers.service';
import { Properties } from './properties';
import { Subscription } from 'rxjs/Rx';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deleted-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeletedModalComponent implements OnDestroy {

  subscription: Subscription;
  properties = new Properties(0, '', '', '');

  constructor(
    public activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private router: Router,
    private helpersService: HelpersService,
    private toastr: ToastrService
  ) {
    this.subscription = this.helpersService.getProperties().subscribe(properties => {
      this.properties = properties;
    });
  }

  delete() {
    this.helpersService.deleteElement(+this.properties.id, 'directions').subscribe(data => {
      this.toastr.success(`Usunięto ${this.properties.title}: ${this.properties.name}`);
      this.afterDelete();
    }, error => {
      this.toastr.error(`Nie udało się usunąć ${this.properties.title}`);
      this.afterDelete();
    });
  }

  afterDelete() {
    this.activeModal.close();
    this.router.navigate([`../../${this.properties.state}`]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

@Component({
  selector: 'app-delete-modal',
  template: ``,
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private helpersService: HelpersService
  ) {
    let property = {
      id: 0,
      title: '',
      name: '',
      state: ''
    };

    this.route.data.subscribe(data => {
      property.title = data.title;
      property.state = data.state;
    });

    this.route.queryParams.subscribe(params => {
      property.name = params.name;
      property.id = params.id;
    });

    this.modalService.open(DeletedModalComponent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate([`../../${property.state}`]);
    });

    this.helpersService.saveProperties(property);
  }

}
