import { error } from '@sveltejs/kit';
import {api} from '$lib/database/cars';

export function load({ params }) {
    const car = api.getFilmById(+params.id)
    if(!car) throw error(404)
    return{
        car
    };
    
}
