/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ song, isPlaying, activeSong, handlePause, handlePlay }) =>
	isPlaying && activeSong?.title === song.trackMetadata?.trackName ? (
		<FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
	) : (
		<FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
	);

export default PlayPause;
