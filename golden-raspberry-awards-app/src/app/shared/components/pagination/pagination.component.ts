import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Paginate } from '../../interfaces/paginate';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

	@Input() paginate: Paginate = new Paginate();
	@Output() selectPage  = new EventEmitter();

	constructor() { }

	ngOnInit(): void { }

	setPage(page: number) {
		this.paginate.page = page;
		this.selectPage.emit();
	}

}
