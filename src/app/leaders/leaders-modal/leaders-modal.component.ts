import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

import { Globals } from '../../global';
import { LeadersService } from '../shared/leaders.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-leader-modal',
  templateUrl: './leaders-modal.component.html',
  styleUrls: ['./leaders-modal.component.scss'],
  providers: [ LeadersService ]
})
export class LeaderModalComponent implements OnInit {

  private id: number;
  public selectizeConfig: Object;
  public leadersDegreeOptions = [
    { id: 1, name: 'Asystent' },
    { id: 2, name: 'Wykładowca' },
    { id: 3, name: 'Starszy wykładowca' },
    { id: 4, name: 'Docent' },
    { id: 5, name: 'Profesor' },
  ];

  constructor(
    private activeModal: NgbActiveModal,
    private leadersService: LeadersService,
    private toastr: ToastrService,
    private router: Router,
    private global: Globals
  ) {
    this.selectizeConfig = global.selectizeConfig;
    Object.assign(this.selectizeConfig, { valueField: 'name' });

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
      this.leadersService.getLeader(this.id);
    }
  }

  save(): void {
    if (this.id) {
      this.leadersService.putLeader(this.leadersService.leader, this.id).subscribe(data => {
        this.toastr.success('Pomyślnie zaktualizowano prowadzącego');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas aktualizacji prowadzącego');
        this.afterChangeData();
      });
    } else {
      this.leadersService.postLeader(this.leadersService.leader).subscribe(success => {
        this.toastr.success('Pomyślnie dodano prowadzącego');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas dodawania prowadzącego');
        this.afterChangeData();
      });
    }
  }

  afterChangeData(): void {
    this.activeModal.close();
    this.router.navigate(['../../leaders']);
  }
}

@Component({
  selector: 'app-leaders-modal',
  template: ``,
  styleUrls: ['./leaders-modal.component.scss']
})
export class LeadersModalComponent {

  constructor(private modalService: NgbModal, private router: Router) {
    this.modalService.open(LeaderModalComponent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate(['../../leaders']);
    });
  }

}
