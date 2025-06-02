import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constant";
import { addPopularMovies } from "../utilis/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  //Fetch the data from TMDB API and update the store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1'",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularMovies;
