import { Movie } from 'src/app/shared/interfaces/movie';
import { Pageable } from './pegeable';
import { Sort } from './sort';

export interface Movies {
	content				: Movie[];
	pageable			: Pageable;
	totalPages			: number;
	totalElements		: number;
	last				: boolean;
	first				: boolean;
	sort				: Sort;
	number				: number;
	numberOfElements	: number;
	size				: number;
	empty				: boolean;
}
