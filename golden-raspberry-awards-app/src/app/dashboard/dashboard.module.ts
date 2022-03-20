import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeDashboardComponent } from './components/home/home-dashboard.component';
import { MovieDashboardComponent } from './components/movie/movie-dashboard.component';
import { ProducerDashboardComponent } from './components/producer/producer-dashboard.component';
import { StudioDashboardComponent } from './components/studio/studio-dashboard.component';
import { YearDashboardComponent } from './components/year/year-dashboard.component';


@NgModule({
	declarations: [
		HomeDashboardComponent,
		MovieDashboardComponent,
		ProducerDashboardComponent,
		StudioDashboardComponent,
		YearDashboardComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }
