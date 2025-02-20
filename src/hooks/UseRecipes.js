'use client';
// import useSWR from 'swr';
import { veganRecipes } from '../utils/data/testData.js';

function UseRecipes() {
	//TODO: API CALLS ARE LIMITED, WHILE DEVELOP USE MOCK DATA
	// const ENDPOINT =
	// 	`${process.env.TASTY_API}?from=0&size=20&tags=vegan`;

	// const fetcher = (...args) => {
	// 	const options = {
	// 		method: 'GET',
	// 		headers: {
	// 			'x-rapidapi-key': `${process.env.API_HOST_KEY}`,
	// 			'x-rapidapi-host': `${process.env.API_HOST}`,
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
