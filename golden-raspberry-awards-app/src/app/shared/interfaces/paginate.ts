import { environment } from "src/environments/environment";

export class Paginate {
	page 			= 0;
	lastPage 		= 0;
	last 			= false;
	first 			= true;
	perPage         = environment.perPagePaginate;
	totalElements  	= 0;
}
