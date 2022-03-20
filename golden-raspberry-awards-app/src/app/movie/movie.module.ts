import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { RequestService } from '../shared/services/request.service';

import { HomeMovieComponent } from './components/home/home-movie.component';


@NgModule({
	declarations: [
		HomeMovieComponent
	],
	imports: [
		CommonModule,
		MovieRoutingModule,
		SharedModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		RequestService
	],
})
export class MovieModule { }
