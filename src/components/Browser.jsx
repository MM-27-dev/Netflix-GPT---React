import React from "react";
import Header from "./Header";
import useNewPlayingMovies from "../hooks/useNewPlayingMovies";
import MainConatiner from "./MainConatiner";
import SeconadryContainer from "./SeconadryContainer";

const Browser = () => {
  useNewPlayingMovies();
  return (
    <div>
      <Header />
      <MainConatiner />
      <SeconadryContainer />
      {/* 
           MainConatainer
            -Video Background
            - VideoTitle
          SecondaryConatiner
            -MovieList * n
             -Cards * n

       */}
    </div>
  );
};

export default Browser;
