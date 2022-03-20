import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModule } from '../../dashboard.module';

import { MovieDashboardComponent } from './movie-dashboard.component';

describe(MovieDashboardComponent.name, () => {
	let component: MovieDashboardComponent;
	let fixture: ComponentFixture<MovieDashboardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DashboardModule],
		}).compileComponents();

		fixture = TestBed.createComponent(MovieDashboardComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should return from function submit', async () => {
		component.form.setValue({ year: 9999 })
		let data = await component.submit();
		expect(9999).toBe(data);
	});
});
