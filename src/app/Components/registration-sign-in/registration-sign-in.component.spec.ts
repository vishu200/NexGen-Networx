import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSignInComponent } from './registration-sign-in.component';

describe('RegistrationSignInComponent', () => {
  let component: RegistrationSignInComponent;
  let fixture: ComponentFixture<RegistrationSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
