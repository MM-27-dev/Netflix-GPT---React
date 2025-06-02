import React from "react";
import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

const SeconadryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-50 pl-12 relative z-20">
        <MovieList title={"New Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />

        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
      </div>
      {/* 
      MovieList - Popular
      MovieList - Trending
      MovieList - NowPlaying
      MovieList -Horror
       */}
    </div>
  );
};

export default SeconadryContainer;
