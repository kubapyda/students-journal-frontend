import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanGroupComponent } from './dean-group.component';

describe('DeanGroupComponent', () => {
  let component: DeanGroupComponent;
  let fixture: ComponentFixture<DeanGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeanGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeanGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
