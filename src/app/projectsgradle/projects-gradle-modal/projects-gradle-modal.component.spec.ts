import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsGradleModalComponent } from './projects-gradle-modal.component';

describe('ProjectsGradleModalComponent', () => {
  let component: ProjectsGradleModalComponent;
  let fixture: ComponentFixture<ProjectsGradleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsGradleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsGradleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
