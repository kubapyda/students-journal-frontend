import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentsModalComponent } from './deparments-modal.component';

describe('DeparmentsModalComponent', () => {
  let component: DeparmentsModalComponent;
  let fixture: ComponentFixture<DeparmentsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparmentsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
