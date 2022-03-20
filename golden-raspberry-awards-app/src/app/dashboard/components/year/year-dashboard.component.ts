import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Years } from 'src/app/shared/interfaces/years';

@Component({
	selector: 'app-year-dashboard',
	templateUrl: './year-dashboard.component.html',
	styleUrls: ['./year-dashboard.component.scss']
})
export class YearDashboardComponent implements OnInit {

	@Input() public value = new Observable<Years>();

	constructor() { }

	ngOnInit(): void { }

}
