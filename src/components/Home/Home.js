import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import API_KEY from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";

const Home = () => {
  const movieText = "Harry";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${API_KEY}&s=${movieText}&type=movie`)
        .catch((err) => console.log("error", err));
      console.log(response.data.Search);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>;
      <MovieListing />
    </div>
  );
};

export default Home;
