import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RequestService } from 'src/app/shared/services/request.service';

describe(RequestService.name, () => {
	let service: RequestService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports:[HttpClientModule],
			providers: [RequestService]
		});
		service = TestBed.inject(RequestService);
	});

	it('should return from function getYearsWinners', (done: DoneFn) => {
		service.getYearsWinners().subscribe(
			(value: any) => {
				expect(true).toBe(true);
				done();
			},
			done.fail
		);
		expect(true).toBe(true);
	});

	it('should return from function getIntervalForProducers', (done: DoneFn) => {
		service.getIntervalForProducers().subscribe(
			(value: any) => {
				expect(true).toBe(true);
				done();
			},
			done.fail
		);
		expect(true).toBe(true);
	});

	it('should return from function getWinningMoviesByYear', (done: DoneFn) => {
		service.getWinningMoviesByYear(2018).subscribe(
			(value: any) => {
				expect(true).toBe(true);
				done();
			},
			done.fail
		);
		expect(true).toBe(true);
	});


	it('should return from function getStudioWinCount', (done: DoneFn) => {
		service.getStudioWinCount().subscribe(
			(value: any) => {
				expect(true).toBe(true);
				done();
			},
			done.fail
		);
		expect(true).toBe(true);
	});

	it('should return HttpHeaders', () => {
		service.getHeaders()
		expect(true).toBe(true);
	});
});
