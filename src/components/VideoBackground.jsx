import React, {  } from 'react'
import { API_OPTIONS } from '../utilis/constant';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


// eslint-disable-next-line no-unused-vars
const VideoBackground = ({ movieId }) => {
  
 const trailerVideo = useSelector((store)=> store.movies?.trailerVideo);
 useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/VWqJifMMgZE?si="+trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground