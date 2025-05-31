import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainConatiner = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Handle loading state or missing data
  if (!movies || movies.length === 0) return null;

  const newMovie = movies[0];
  console.log(newMovie);

  const { original_title, overview, id } = newMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainConatiner;
