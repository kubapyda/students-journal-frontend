import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsgradleComponent } from './projectsgradle.component';

describe('ProjectsgradleComponent', () => {
  let component: ProjectsgradleComponent;
  let fixture: ComponentFixture<ProjectsgradleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsgradleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsgradleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
