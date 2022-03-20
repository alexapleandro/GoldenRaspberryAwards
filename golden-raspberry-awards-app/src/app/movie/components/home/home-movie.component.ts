import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { RequestService } from 'src/app/shared/services/request.service';

import { Observable } from 'rxjs';

import { Movies } from 'src/app/shared/interfaces/movies';
import { Paginate } from 'src/app/shared/interfaces/paginate';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-home-movie',
	templateUrl: './home-movie.component.html',
	styleUrls: ['./home-movie.component.scss']
})
export class HomeMovieComponent implements OnInit {

	value$: Observable<Movies> = new Observable<Movies>();

	paginate: Paginate = new Paginate();

	optionsWinner = [
		{value: false,	label: "No"},
		{value: true, 	label: "Yes"}
	];

	optionsYears: number[] = [];

	currentYear	= new Date().getFullYear();

	selectedYear = 2018;

	valueWinner = false;

	constructor(private title:Title, private requestService: RequestService) { }

	ngOnInit(): void {
		this.title.setTitle('List');
		this.setYears();
		this.searchMovies(true);
	}

	public searchMovies($reloadPaginate = false){
		this.paginate.page = $reloadPaginate ? 0 : this.paginate.page;
		this.value$ = this.requestService.getMovies(this.paginate.page, this.paginate.perPage ,this.valueWinner, this.selectedYear);
		this.setPaginate();
	}

	setYears(){
		let currentYear 	= new Date().getFullYear();
		let limitYear 		= currentYear - 100;
		this.optionsYears 	= [];
		for (let year = this.selectedYear; year >= limitYear; year--) {
			this.optionsYears.push(year);
		}
	}

	public setPaginate(){
		this.value$.subscribe((data: Movies) => {
				this.paginate = {
					page 			: data.pageable.pageNumber,
					lastPage		: data.totalPages,
					first			: data.first,
					last			: data.last,
					perPage			: environment.perPagePaginate,
					totalElements	: data.totalElements
				}
			}
		);
	}

}
