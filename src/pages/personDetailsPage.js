import React from "react";
import { useParams } from "react-router-dom";
// import useMovie from "../hooks/useMovie";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import Header from "../components/headerMovieList";
import PersonDetails from "../components/personDetails";
import { getPerson } from "../api/tmdb-api";
import Grid from "@material-ui/core/Grid";
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
    error,
    isLoading,
    isError,
  } = useQuery(["person", { id: id }], getPerson);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className={classes.root}>
      {person ? (
        <>
          <Header title={`${person.name}`} />
          <PersonDetails person={person}/>
        </>
      ) : (
        <p>Waiting for person details</p>
      )}
      </div>
  
  );
};

export default PersonDetailsPage;