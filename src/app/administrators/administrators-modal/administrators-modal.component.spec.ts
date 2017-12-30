import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorsModalComponent } from './administrators-modal.component';

describe('AdministratorsModalComponent', () => {
  let component: AdministratorsModalComponent;
  let fixture: ComponentFixture<AdministratorsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
