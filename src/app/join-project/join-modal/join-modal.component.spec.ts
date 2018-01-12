import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinModalComponent } from './join-modal.component';

describe('JoinModalComponent', () => {
  let component: JoinModalComponent;
  let fixture: ComponentFixture<JoinModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
