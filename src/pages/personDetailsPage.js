import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import Header from "../components/headerMovieList";
import PersonDetails from "../components/personDetails";
import { getPerson, getPersonMovies } from "../api/tmdb-api";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
  },
}));

const PersonDetailsPage = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const {
    data: person,
    error: personErrorMessage,
    isLoading: personLoading,
    isError: personError,
  } = useQuery(["person", { id: id }], getPerson);

  const {
    data: movies,
    error: moviesErrorMessage,
    isLoading: moviesLoading,
    isError: moviesError,
  } = useQuery(["personMovies", { id: id }], getPersonMovies);

  const isLoading = personLoading || moviesLoading;
  const isError = moviesError || personError;
  const error = [moviesErrorMessage, personErrorMessage];

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <span>
        <h1>There was an error </h1>
        {error.map((e) => (e ? <h1>Error Message: {e.message}</h1> : null))}
      </span>
    );
  }

  return (
    <div className={classes.root}>
      {person ? (
        <>
          <Header title={`${person.name}`} />
          <PersonDetails person={person} movies={movies} />
        </>
      ) : (
        <p>Waiting for person details</p>
      )}
    </div>
  );
};

export default PersonDetailsPage;
