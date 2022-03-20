import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProducerMinMax } from 'src/app/shared/interfaces/producer-min-max';

@Component({
	selector: 'app-producer-dashboard',
	templateUrl: './producer-dashboard.component.html',
	styleUrls: ['./producer-dashboard.component.scss']
})
export class ProducerDashboardComponent implements OnInit {

	@Input() public value = new Observable<ProducerMinMax>();

	constructor() { }

	ngOnInit(): void { }

}
