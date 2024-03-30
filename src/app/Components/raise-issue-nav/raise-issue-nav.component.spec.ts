import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseIssueNavComponent } from './raise-issue-nav.component';

describe('RaiseIssueNavComponent', () => {
  let component: RaiseIssueNavComponent;
  let fixture: ComponentFixture<RaiseIssueNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseIssueNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseIssueNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
