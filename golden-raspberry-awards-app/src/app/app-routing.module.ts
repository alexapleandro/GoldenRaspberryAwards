import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
	},
	{
		path: 'list',
		loadChildren: () => import('./movie/movie.module').then(module => module.MovieModule)
	},
	{
		path: '404',
		component: PageNotFoundComponent,
	},
	{
		path: '**',
		redirectTo: '/404'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
