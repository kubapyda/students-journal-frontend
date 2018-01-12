import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMemberComponent } from './projects-member.component';

describe('ProjectsMemberComponent', () => {
  let component: ProjectsMemberComponent;
  let fixture: ComponentFixture<ProjectsMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
