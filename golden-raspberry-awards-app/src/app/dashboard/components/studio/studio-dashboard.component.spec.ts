import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Studio } from 'src/app/shared/interfaces/studio';
import { Studios } from 'src/app/shared/interfaces/studios';

import { DashboardModule } from '../../dashboard.module';

import { StudioDashboardComponent } from './studio-dashboard.component';

describe(StudioDashboardComponent.name, () => {
	let component: StudioDashboardComponent;
	let fixture: ComponentFixture<StudioDashboardComponent>;
	let values: Studios = {
		studios: [
			{ name: '1', winCount: 1 },
			{ name: '2', winCount: 2 },
			{ name: '3', winCount: 3 },
			{ name: '4', winCount: 4 },
		]
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DashboardModule]
		}).compileComponents();

		fixture = TestBed.createComponent(StudioDashboardComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should return from function filterValue', () => {

		let value = component.filterValue(values);
		expect(value.studios.length).toBe(3);
	});

	it('should return from function filterValue', () => {
		let value = component.sortDesc(values.studios);
		let data = value[0];
		expect(data.winCount).toBe(4);
	});
});
