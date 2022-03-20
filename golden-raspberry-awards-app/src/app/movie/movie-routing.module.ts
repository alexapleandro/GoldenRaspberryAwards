import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeMovieComponent } from './components/home/home-movie.component';

const routes: Routes = [
	{
		path: '',
		component: HomeMovieComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MovieRoutingModule { }
