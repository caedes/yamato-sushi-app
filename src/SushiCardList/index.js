import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { isEmpty } from "lodash";

import SushiCard from "../SushiCard";
import useStyles from "./styles";
import useSushis from "../useSushis";

export default function SushiCardList() {
  const classes = useStyles();

  const { isLoading, error, data: sushis } = useSushis();

  if (isLoading) return <CircularProgress color="secondary" />;

  if (error) return "Error!";

  return (
    <Grid container spacing={2} className={classes.wrapper}>
      {isEmpty(sushis) && "Pas de sushis"}
      {sushis.map(({ id, image, title, description }) => (
        <Grid item xs={6} md={3} key={id}>
          <SushiCard image={image} title={title} description={description} />
        </Grid>
      ))}
    </Grid>
  );
}
