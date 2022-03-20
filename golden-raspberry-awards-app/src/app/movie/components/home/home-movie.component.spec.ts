import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModule } from '../../movie.module';

import { HomeMovieComponent } from './home-movie.component';

describe(HomeMovieComponent.name, () => {

	let component: HomeMovieComponent;
	let fixture: ComponentFixture<HomeMovieComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MovieModule],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeMovieComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

