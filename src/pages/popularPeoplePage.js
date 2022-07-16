import React from "react";
import { getPeople } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PersonList from "../components/personList";
import Grid from "@material-ui/core/Grid";
import Header from "../components/headerMovieList";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
}));

const PopularPeoplePage = () => {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery(
    "popularPeople",
    getPeople
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const people = data.results;
  // console.log(data.results);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Popular Actor Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <PersonList people={people}></PersonList>
      </Grid>
    </Grid>
  );
};
export default PopularPeoplePage;
