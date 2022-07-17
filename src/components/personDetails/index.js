import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  sizeAvatar: {
    height: theme.spacing(45),
    width: theme.spacing(45),
  },
}));

const PersonDetails = (props) => {
  const classes = useStyles();
  const person = props.person;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item align="center" xs={12}>
          <Avatar
            className={classes.sizeAvatar}
            alt="Actor Image"
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h3" align="center">
            Biography
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Typography variant="body1" component="p">
            {person.biography}
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};
export default PersonDetails;
