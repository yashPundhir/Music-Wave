/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
	const dispatch = useDispatch();

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = () => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	return (
		<div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-xl cursor-pointer border-2 border-gray-500">
			<div className=" relative w-full h-[215.5px] group px-1">
				<div
					className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 rounded-xl group-hover:flex ${
						activeSong?.title !== song.title
							? "flex bg-black bg-opacity-70"
							: "hidden"
					}`}
				>
					<PlayPause
						song={song}
						isPlaying={isPlaying}
						activeSong={activeSong}
						handlePause={handlePauseClick}
						handlePlay={handlePlayClick}
					/>
				</div>
				<img
					className="mt-1 rounded-xl"
					src={song.trackMetadata?.displayImageUri}
					alt="song_img"
				/>
			</div>
			<div className="mt-4 flex flex-col gap-1.5">
				<p className="font-semibold text-lg text-white truncate">
					{/* ********************** */}
					{/* ********************** */}
					{/* ********************** */}
					{/* <Link to={`/songs/${song?.key}`}> */}
					<Link to="/">{song.trackMetadata?.trackName}</Link>
				</p>
				<p className="text-sm truncate text-gray-300">
					{/* ********************** */}
					{/* ********************** */}
					{/* ********************** */}
					{/* <Link to={song.trackMetadata.artists ? `/artists/${song?.artists[0]?.adamid}` : `/top-artists`}> */}
					<Link to="/">{song.trackMetadata.artists[0]?.name}</Link>
				</p>
			</div>
		</div>
	);
};

export default SongCard;
