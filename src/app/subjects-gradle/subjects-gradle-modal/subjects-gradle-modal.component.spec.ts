import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsGradleModalComponent } from './subjects-gradle-modal.component';

describe('SubjectsGradleModalComponent', () => {
  let component: SubjectsGradleModalComponent;
  let fixture: ComponentFixture<SubjectsGradleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsGradleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsGradleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
