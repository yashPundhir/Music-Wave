// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   currentSongs: [],
//   currentIndex: 0,
//   isActive: false,
//   isPlaying: false,
//   activeSong: {},
//   genreListId: '',
// };

// const playerSlice = createSlice({
//   name: 'player',
//   initialState,
//   reducers: {
//     setActiveSong: (state, action) => {
//       state.activeSong = action.payload.song;

//       if (action.payload?.data?.tracks?.hits) {
//         state.currentSongs = action.payload.data.tracks.hits;
//       } else if (action.payload?.data?.properties) {
//         state.currentSongs = action.payload?.data?.tracks;
//       } else {
//         state.currentSongs = action.payload.data;
//       }

//       state.currentIndex = action.payload.i;
//       state.isActive = true;
//     },

//     nextSong: (state, action) => {
//       if (state.currentSongs[action.payload]?.track) {
//         state.activeSong = state.currentSongs[action.payload]?.track;
//       } else {
//         state.activeSong = state.currentSongs[action.payload];
//       }

//       state.currentIndex = action.payload;
//       state.isActive = true;
//     },

//     prevSong: (state, action) => {
//       if (state.currentSongs[action.payload]?.track) {
//         state.activeSong = state.currentSongs[action.payload]?.track;
//       } else {
//         state.activeSong = state.currentSongs[action.payload];
//       }

//       state.currentIndex = action.payload;
//       state.isActive = true;
//     },

//     playPause: (state, action) => {
//       state.isPlaying = action.payload;
//     },

//     selectGenreListId: (state, action) => {
//       state.genreListId = action.payload;
//     },
//   },
// });

// export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

// export default playerSlice.reducer;

/* eslint-disable import/order */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentSongs: [],
	currentIndex: 0,
	isActive: false,
	isPlaying: false,
	activeSong: {},
	genreListId: "",
};

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		setActiveSong: (state, action) => {
			state.activeSong = action.payload;

			// Assuming the new JSON data is in the format you provided
			state.currentSongs = action.payload.map((item) => item.trackMetadata);

			// Assuming you want to set the current index to 0 when setting a new active song
			state.currentIndex = 0;
			state.isActive = true;
		},

		nextSong: (state, action) => {
			state.currentIndex += 1;
			if (state.currentIndex >= state.currentSongs.length) {
				state.currentIndex = 0;
			}
			state.activeSong = state.currentSongs[state.currentIndex];
			state.isActive = true;
		},

		prevSong: (state, action) => {
			state.currentIndex -= 1;
			if (state.currentIndex < 0) {
				state.currentIndex = state.currentSongs.length - 1;
			}
			state.activeSong = state.currentSongs[state.currentIndex];
			state.isActive = true;
		},

		playPause: (state, action) => {
			state.isPlaying = action.payload;
		},

		selectGenreListId: (state, action) => {
			state.genreListId = action.payload;
		},
	},
});

export const {
	setActiveSong,
	nextSong,
	prevSong,
	playPause,
	selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
