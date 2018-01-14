import { ActivatedRoute, Router, RouterStateSnapshot, RoutesRecognized } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Direction } from '../shared/direction';
import { DirectionsService } from './../shared/directions.service';
import { HelpersService } from './../../service/helpers.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Rx';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-directions-modal-content',
  templateUrl: './direction-modal.component.html',
  styleUrls: ['./direction-modal.component.scss'],
  providers: [ DirectionsService ]
})
export class DirectionsModalComponent implements OnInit {

  private id: number;
  private isEdited: boolean;
  public direction = new Direction('');

  constructor(
    private router: Router,
    private http: HttpClient,
    public directionService: DirectionsService,
    private toastr: ToastrService,
    private activeModal: NgbActiveModal,
    private helpersService: HelpersService
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
      this.directionService.getDirection(this.id);
    }
  }

  save(): void {
    if (this.id) {
      this.directionService.putDirection(this.directionService.direction, this.id).subscribe(success => {
        this.toastr.success('Pomyślnie zaktualizowano Wydział');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas aktualizacji Wydziału');
        this.afterChangeData();
      });
    } else {
      this.directionService.postDirection(this.directionService.direction).subscribe(success => {
        this.toastr.success('Pomyślnie dodano Wydział');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas dodawania Wydziału');
        this.afterChangeData();
      });
    }
  }

  afterChangeData(): void {
    this.activeModal.close();
    this.router.navigate(['../../directions']);
  }
}

@Component({
  selector: 'app-direction-modal',
  template: ``,
  styleUrls: ['./direction-modal.component.scss']
})
export class DirectionModalComponent {

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) {
    this.modalService.open(DirectionsModalComponent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate(['../../directions']);
    });
  }
}
