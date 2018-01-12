import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsGradleViewComponent } from './subjects-gradle-view.component';

describe('SubjectsGradleViewComponent', () => {
  let component: SubjectsGradleViewComponent;
  let fixture: ComponentFixture<SubjectsGradleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsGradleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsGradleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
