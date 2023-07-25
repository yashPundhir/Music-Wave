/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";

import { spotifyApi } from "./services/spotify";

export const store = configureStore({
	reducer: {
		[spotifyApi.reducerPath]: spotifyApi.reducer,
		player: playerReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(spotifyApi.middleware),
});
