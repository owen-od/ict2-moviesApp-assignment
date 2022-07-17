import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function PersonCard(props) {
  const classes = useStyles();
  const person = props.person;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {person.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/people/${person.id}`}>
          <Button variant="contained" color="primary" onClick={null}>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
