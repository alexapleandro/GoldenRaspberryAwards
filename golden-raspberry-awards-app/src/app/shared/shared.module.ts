import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
	declarations: [
		HeaderComponent,
		NavbarComponent,
		PageNotFoundComponent,
		PaginationComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		HeaderComponent,
		NavbarComponent,
		PageNotFoundComponent,
		PaginationComponent
	]
})
export class SharedModule { }
