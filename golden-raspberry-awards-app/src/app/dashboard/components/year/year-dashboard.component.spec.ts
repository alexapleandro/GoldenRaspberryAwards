import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearDashboardComponent } from './year-dashboard.component';

describe('YearDashboardComponent', () => {
  let component: YearDashboardComponent;
  let fixture: ComponentFixture<YearDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
