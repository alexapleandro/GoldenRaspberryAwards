import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';

import { PaginationComponent } from './pagination.component';

describe(PaginationComponent.name, () => {
	let component: PaginationComponent;
	let fixture: ComponentFixture<PaginationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppModule]
		}).compileComponents();

		fixture = TestBed.createComponent(PaginationComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should return from function setPage', async () => {
		component.setPage(4)
		expect(4).toBe(component.paginate.page);
	});
});
