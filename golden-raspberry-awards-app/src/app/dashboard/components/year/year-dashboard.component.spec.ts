import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardModule } from '../../dashboard.module';

import { YearDashboardComponent } from './year-dashboard.component';

describe(YearDashboardComponent.name, () => {
	let component: YearDashboardComponent;
	let fixture: ComponentFixture<YearDashboardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DashboardModule]
		}).compileComponents();

		fixture = TestBed.createComponent(YearDashboardComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
