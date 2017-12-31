import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsModalComponent } from './projects-modal.component';

describe('ProjectsModalComponent', () => {
  let component: ProjectsModalComponent;
  let fixture: ComponentFixture<ProjectsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
