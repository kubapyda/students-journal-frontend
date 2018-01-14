import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

import { Globals } from './../../global/global';
import { LeadersService } from './../../leaders/shared/leaders.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { SubjectsService } from './../shared/subjects.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject-modal-component',
  templateUrl: './subjects-modal.component.html',
  styleUrls: ['./subjects-modal.component.scss'],
  providers: [ LeadersService, SubjectsService ]
})
export class SubjectModalComponent implements OnInit {

  private id: number;
  public selectizeConfig: Object;

  constructor(
    private activeModal: NgbActiveModal,
    private leadersService: LeadersService,
    private subjectsService: SubjectsService,
    private toastr: ToastrService,
    private router: Router,
    private global: Globals
  ) {
    this.leadersService.getLeadersForSelectize();
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
      this.subjectsService.getSubject(this.id);
    }
  }

  save(): void {
    if (this.id) {
      this.subjectsService.putSubject(this.subjectsService.subject, this.id).subscribe(data => {
        this.toastr.success('Pomyślnie zaktualizowano przemiot');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas aktualizacji przemiotu');
        this.afterChangeData();
      });
    } else {
      this.subjectsService.postSubject(this.subjectsService.subject).subscribe(success => {
        this.toastr.success('Pomyślnie dodano przedmiot');
        this.afterChangeData();
      }, err => {
        this.toastr.error('Błąd podczas dodawania przedmiotu');
        this.afterChangeData();
      });
    }
  }

  afterChangeData(): void {
    this.activeModal.close();
    this.router.navigate(['../../subjects']);
  }
}

@Component({
  selector: 'app-subjects-modal',
  template: ``,
  styleUrls: ['./subjects-modal.component.scss']
})
export class SubjectsModalComponent {

  constructor(private modalService: NgbModal, private router: Router) {
    this.modalService.open(SubjectModalComponent, {
      backdrop: 'static'
    }).result.then((result) => {
      this.router.navigate(['../../subjects']);
    });
  }

}
