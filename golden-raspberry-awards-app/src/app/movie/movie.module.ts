import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { HomeMovieComponent } from './components/home/home-movie.component';


@NgModule({
	declarations: [
		HomeMovieComponent
	],
	imports: [
		CommonModule,
		MovieRoutingModule
	]
})
export class MovieModule { }
