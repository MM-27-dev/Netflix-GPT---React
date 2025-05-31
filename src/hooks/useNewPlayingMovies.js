import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constant";
import { addNowPlayingMovies } from "../utilis/movieSlice";
import { useDispatch } from "react-redux";


const useNewPlayingMovies = () => {
  //Fetch the data from TMDB API and update the store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useNewPlayingMovies;
