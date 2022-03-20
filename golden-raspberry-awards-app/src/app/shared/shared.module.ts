import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
	declarations: [
		HeaderComponent,
		NavbarComponent,
		PageNotFoundComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		HeaderComponent,
		NavbarComponent,
		PageNotFoundComponent
	]
})
export class SharedModule { }
