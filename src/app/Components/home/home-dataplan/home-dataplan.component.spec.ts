import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDataplanComponent } from './home-dataplan.component';

describe('HomeDataplanComponent', () => {
  let component: HomeDataplanComponent;
  let fixture: ComponentFixture<HomeDataplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDataplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDataplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
