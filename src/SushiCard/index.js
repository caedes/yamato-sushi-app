import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { string } from "prop-types";
import { useCounter } from "react-use";
import config from "react-global-configuration";

import useStyles from "./styles";
import QuantityInput from "./QuantityInput";

export default function SushiCard({ image, title, description }) {
  const classes = useStyles();

  const { max, min, defaultValue } = config.get("quantity");
  const [quantity, { inc, dec, set }] = useCounter(defaultValue, max, min);

  return (
    <Card className={classes.root}>
      {image && (
        <CardMedia className={classes.media} image={image} title={title} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title || "Anonymous"}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <QuantityInput quantity={quantity} inc={inc} dec={dec} set={set} />
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Ajouter</Button>
      </CardActions>
    </Card>
  );
}

SushiCard.propTypes = {
  image: string,
  title: string,
  description: string,
};

SushiCard.defaultProps = {
  image: "https://via.placeholder.com/400x300",
};
