import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Years } from '../interfaces/years';
import { ProducerMinMax } 	from '../interfaces/producer-min-max';
import { Studios } 	from '../interfaces/studios';
import { Movie } from '../interfaces/movie';
import { Movies } from '../interfaces/movies';

@Injectable()
export class RequestService {

	constructor(private http: HttpClient) { }

	getHeaders(): HttpHeaders {
		return new HttpHeaders()
		.set('Content-Type', 'application/json; application/x-www-form-urlencoded;')
		.set('Accept', 'application/json');
	}

	getYearsWinners(params: string = '?projection=years-with-multiple-winners') {
		return this.http.get<Years>(environment.baseUrlApi + params, { headers: this.getHeaders() });
	}

	getIntervalForProducers(params: string = '?projection=max-min-win-interval-for-producers') {
		return this.http.get<ProducerMinMax>(environment.baseUrlApi + params, { headers: this.getHeaders() });
	}

	getStudioWinCount(params: string = '?projection=studios-with-win-count') {
		return this.http.get<Studios>(environment.baseUrlApi + params, { headers: this.getHeaders() });
	}

	getWinningMoviesByYear(year: number) {
		return this.http.get<Movie[]>(`${environment.baseUrlApi}?winner=true&year=${year}`, { headers: this.getHeaders() });
	}

	getMovies(page: number, size: number, winner: boolean, year: number) {
		let url = `${environment.baseUrlApi}?page=${page}&size=${size}&winner=${winner}&year=${year}`;
		return this.http.get<Movies>(url, { headers: this.getHeaders() });
	}

}
