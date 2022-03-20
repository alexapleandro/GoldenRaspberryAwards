import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { RequestService } from 'src/app/shared/services/request.service';

import { Observable } from 'rxjs';

import { Years } from 'src/app/shared/interfaces/years';
import { Studios } from 'src/app/shared/interfaces/studios';
import { ProducerMinMax } from 'src/app/shared/interfaces/producer-min-max';

@Component({
	selector: 'app-home-dashboard',
	templateUrl: './home-dashboard.component.html',
	styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

	dataYears$: Observable<Years> 				= new Observable<Years>();
	dataStudio$: Observable<Studios> 			= new Observable<Studios>();
	dataProducer$: Observable<ProducerMinMax> 	= new Observable<ProducerMinMax>();

	constructor(private title:Title, private requestService: RequestService) { }

	ngOnInit(): void {
		this.title.setTitle('Dashboard');
		this.dataYears$ 	= this.requestService.getYearsWinners();
		this.dataStudio$ 	= this.requestService.getStudioWinCount();
		this.dataProducer$ 	= this.requestService.getIntervalForProducers();
	}

}
