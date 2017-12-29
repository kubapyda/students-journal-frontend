import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanGroupModalComponent } from './dean-group-modal.component';

describe('DeanGroupModalComponent', () => {
  let component: DeanGroupModalComponent;
  let fixture: ComponentFixture<DeanGroupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeanGroupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeanGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
