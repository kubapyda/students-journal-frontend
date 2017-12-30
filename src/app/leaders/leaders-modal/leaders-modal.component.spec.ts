import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersModalComponent } from './leaders-modal.component';

describe('LeadersModalComponent', () => {
  let component: LeadersModalComponent;
  let fixture: ComponentFixture<LeadersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
