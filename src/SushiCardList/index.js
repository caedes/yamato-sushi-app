import React from "react";
import { Grid } from "@material-ui/core";

import SushiCard from "../SushiCard";
import useStyles from "./styles";

export default function SushiCardList() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.wrapper}>
      <Grid item xs={6} md={3}>
        <SushiCard />
      </Grid>
      <Grid item xs={6} md={3}>
        <SushiCard />
      </Grid>
      <Grid item xs={6} md={3}>
        <SushiCard />
      </Grid>
      <Grid item xs={6} md={3}>
        <SushiCard />
      </Grid>
      <Grid item xs={6} md={3}>
        <SushiCard />
      </Grid>
      <Grid item xs={6} md={3}>
        <SushiCard />
      </Grid>
      <Grid item xs={6} md={3}>
        <SushiCard />
      </Grid>
    </Grid>
  );
}
