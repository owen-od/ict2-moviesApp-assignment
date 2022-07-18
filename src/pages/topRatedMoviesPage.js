import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTopMovies } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const TopMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "topMovies",
    getTopMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;
  // console.log(data.results);

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />;
      }}
    />
  );
};
export default TopMoviesPage;
