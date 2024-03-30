import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustomerReviewComponent } from './home-customer-review.component';

describe('HomeCustomerReviewComponent', () => {
  let component: HomeCustomerReviewComponent;
  let fixture: ComponentFixture<HomeCustomerReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCustomerReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCustomerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
