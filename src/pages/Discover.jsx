/* eslint-disable import/order */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

import { useGetTopSongsQuery } from "../redux/services/spotify";
import { retry } from "@reduxjs/toolkit/dist/query";

const Discover = () => {
	const dispatch = useDispatch();
	const { activeSong, isPlaying } = useSelector((state) => state.player);

	const { data, isFetching, error } = useGetTopSongsQuery();

	const genreTitle = "Pop";

	const reqData = data && data.slice(0, 50);

	if (isFetching) return <Loader title="Loading Songs..." />;

	if (error) return <Error />;

	return (
		<div className="flex flex-col">
			<div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
				<h2 className="font-bold text-3xl text-white text-left">
					Discover {genreTitle}
				</h2>
				<select
					onChange={() => {}}
					value=""
					className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
				>
					{genres.map((genre) => (
						<option key={genre.value} value={genre.value}>
							{genre.title}
						</option>
					))}
				</select>
			</div>
			<div className="flex flex-wrap sm:justify-start justify-center gap-8">
				{reqData?.map((song, i) => (
					<SongCard
						key={song.key}
						song={song}
						i={i}
						isPlaying={isPlaying}
						activeSong={activeSong}
						reqData={reqData}
					/>
				))}
			</div>
		</div>
	);
};

export default Discover;
