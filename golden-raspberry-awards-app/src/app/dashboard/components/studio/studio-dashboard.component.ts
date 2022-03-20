import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Studios } from 'src/app/shared/interfaces/studios';
import { Studio } from 'src/app/shared/interfaces/studio';

@Component({
	selector: 'app-studio-dashboard',
	templateUrl: './studio-dashboard.component.html',
	styleUrls: ['./studio-dashboard.component.scss']
})
export class StudioDashboardComponent implements OnInit, OnChanges {

	@Input() public value = new Observable<Studios>();

	constructor() { }

	ngOnInit(): void { }

	ngOnChanges(changes: SimpleChanges): void {
		if(changes['value']) {
			this.value =this.value.pipe(
				map((data: any) => this.filterValue(data))
			);
		}
	}

	filterValue(value: Studios): Studios{
		value.studios = this.sortDesc(value.studios).slice(0, 3);
		return value;
	}

	sortDesc(list: Studio[]){
		return list.sort((a, b) => (a.winCount > b.winCount ? -1 : 1));
	}

}
