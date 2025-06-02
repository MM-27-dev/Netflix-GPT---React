import React from "react";
import MovieCard from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  console.log(movies);

  if (!movies || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies available</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl p-4 font-semibold text-white ">{title}</h1>
      <div className=" flex overflow-x-auto scrollbar-hide whitespace-nowrap">
        <div className="  flex space-x-4 py-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
