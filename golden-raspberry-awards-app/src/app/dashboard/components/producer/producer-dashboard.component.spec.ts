import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModule } from '../../dashboard.module';

import { ProducerDashboardComponent } from './producer-dashboard.component';

describe(ProducerDashboardComponent.name, () => {
	let component: ProducerDashboardComponent;
	let fixture: ComponentFixture<ProducerDashboardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DashboardModule]
		}).compileComponents();

		fixture = TestBed.createComponent(ProducerDashboardComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
