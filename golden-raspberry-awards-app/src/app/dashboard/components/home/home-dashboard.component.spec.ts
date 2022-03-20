import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModule } from '../../dashboard.module';

import { HomeDashboardComponent } from './home-dashboard.component';

describe(HomeDashboardComponent.name, () => {

	let component: HomeDashboardComponent;
	let fixture: ComponentFixture<HomeDashboardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DashboardModule],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeDashboardComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
