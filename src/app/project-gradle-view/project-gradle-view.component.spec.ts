import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGradleViewComponent } from './project-gradle-view.component';

describe('ProjectGradleViewComponent', () => {
  let component: ProjectGradleViewComponent;
  let fixture: ComponentFixture<ProjectGradleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectGradleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGradleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
