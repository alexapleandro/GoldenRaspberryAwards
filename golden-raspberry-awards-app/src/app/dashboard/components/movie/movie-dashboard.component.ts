import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/interfaces/movie';
import { Years } from 'src/app/shared/interfaces/years';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
	selector: 'app-movie-dashboard',
	templateUrl: './movie-dashboard.component.html',
	styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

	@Input() public valueYears = new Observable<Years>();

	value$: Observable<Movie[]> = new Observable<Movie[]>();

	constructor(private requestService: RequestService) { }

	ngOnInit(): void { }

	form = new FormGroup({
		year: new FormControl('', [Validators.required, Validators.pattern('^\\d{1,4}$')])
	});

	submit(){
		this.value$ = this.requestService.getWinningMoviesByYear(this.form.value.year);
		return this.form.value.year;
	}

}
