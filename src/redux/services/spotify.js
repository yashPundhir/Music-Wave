/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
// 	method: "GET",
// 	headers: {
// 		"X-RapidAPI-Key": "ec4fe1f5e5mshfe13ccb4771dfa8p178eb9jsnaa30f5dc9b1c",
// 		"X-RapidAPI-Host": "spotify81.p.rapidapi.com",
// 	},
// };

// fetch("https://spotify81.p.rapidapi.com/top_200_tracks", options)
// 	.then((response) => response.json())
// 	.then((response) => console.log(response))
// 	.catch((err) => console.error(err));

export const spotifyApi = createApi({
	reducerPath: "spotifyApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://spotify81.p.rapidapi.com",
		prepareHeaders: (headers) => {
			headers.set(
				"X-RapidAPI-Key",
				"ec4fe1f5e5mshfe13ccb4771dfa8p178eb9jsnaa30f5dc9b1c"
			);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopSongs: builder.query({ query: () => "/top_200_tracks" }),
	}),
});

export const { useGetTopSongsQuery } = spotifyApi;
