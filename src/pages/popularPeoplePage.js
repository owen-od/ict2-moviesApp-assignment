import React from "react";
import { getPeople } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PersonList from "../components/personList";
import Grid from "@material-ui/core/Grid";
import Header from "../components/headerMovieList";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
}));

const PopularPeoplePage = () => {
  let [pageNumber, setPageNumber] = useState(1);
  // pageNumber = localStorage.getItem("page");
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery(
    ["popularPeople", pageNumber],
    () => getPeople(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const people = data.results;
  // console.log(data.results);

  const handleChange = (event, value) => {
    setPageNumber(value);
    // localStorage.setItem('page', value)
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={"Popular Actor Page"} />
        </Grid>
        <Grid item container spacing={5}>
          <PersonList people={people}></PersonList>
        </Grid>
        <Grid item xs={12}>
          <Pagination
            count={100}
            page={pageNumber}
            onChange={handleChange}
            size="large"
          />
        </Grid>
      </Grid>
    </>
  );
};
export default PopularPeoplePage;
