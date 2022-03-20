import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { RequestService } from '../shared/services/request.service';

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
		DashboardRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		RequestService
	]
})
export class DashboardModule { }
