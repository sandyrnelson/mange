'use client';
// import useSWR from 'swr';
import { veganRecipes } from '../utils/data/testData.js';

function UseRecipes() {
  //TODO: API CALLS ARE LIMITED, WHILE DEVELOP USE MOCK DATA 
	// const ENDPOINT =
	// 	'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=vegan';

	// const fetcher = (...args) => {
	// 	const options = {
	// 		method: 'GET',
	// 		headers: {
	// 			'x-rapidapi-key': '3ce9f6ab4amsh575ae871bc810d0p14cce5jsna5389cf59b09',
	// 			'x-rapidapi-host': 'tasty.p.rapidapi.com',
	// 		},
	// 	};
	// 	return fetch(...args, options).then((res) => res.json());
	// };

	// const { data, isLoading, error } = useSWR(ENDPOINT, fetcher);

	const data = veganRecipes.results;
	const isLoading = false;
	const error = false;
	return { data, isLoading, error };
}

export default UseRecipes;
