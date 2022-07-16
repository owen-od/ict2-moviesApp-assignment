import React from "react";
import Person from "../personCard/";
import Grid from "@material-ui/core/Grid";

const PersonList = (props) => {
  let personCards = props.people.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Person key={m.id} person={m} />
    </Grid>
  ));
  return personCards;
};

export default PersonList;
