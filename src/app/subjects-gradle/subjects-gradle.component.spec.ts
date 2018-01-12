import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsGradleComponent } from './subjects-gradle.component';

describe('SubjectsGradleComponent', () => {
  let component: SubjectsGradleComponent;
  let fixture: ComponentFixture<SubjectsGradleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsGradleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsGradleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
