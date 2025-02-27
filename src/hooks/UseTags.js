'use client';
// import useSWR from 'swr';
import { TAGS } from '../utils/data/testData.js';

function UseTags() {
	//TODO: API CALLS ARE LIMITED, WHILE DEVELOP USE MOCK DATA
	// const ENDPOINT =
	// 	`${process.env.NEXT_PUBLIC_TASTY_API}/tags/list`;

	// const fetcher = (...args) => {
	// 	const options = {
	// 		method: 'GET',
	// 		headers: {
	// 			'x-rapidapi-key': `${process.env.NEXT_PUBLIC_API_HOST_KEY}`,
	// 			'x-rapidapi-host': `${process.env.NEXT_PUBLIC_API_HOST}`,
	// 		},
	// 	};
	// 	return fetch(...args, options).then((res) => res.json());
	// };

	// const { data, isLoading, error } = useSWR(ENDPOINT, fetcher);

	const data = TAGS.results;
	const isLoading = false;
	const error = false;
	return { data, isLoading, error };
}

export default UseTags;
