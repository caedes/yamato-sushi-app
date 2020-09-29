import React from "react";
import { Grid, IconButton, Input } from "@material-ui/core";
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";
import { func, number } from "prop-types";
import config from "react-global-configuration";

function Button({ onClick, label, disabled, Icon }) {
  return (
    <IconButton aria-label={label} onClick={onClick} disabled={disabled}>
      <Icon fontSize="inherit" />
    </IconButton>
  );
}

export default function QuantityInput({ quantity, inc, dec, set }) {
  const { max, min } = config.get("quantity");
  const isDec = quantity > min;
  const isInc = quantity < max;

  return (
    <Grid container>
      <Grid item xs={4}>
        {inc && (
          <Button
            onClick={() => inc()}
            label="Ajouter"
            Icon={AddBox}
            disabled={!isInc}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        <Input
          name="quantity"
          value={quantity}
          onChange={(event) => set(event.target.value)}
          inputProps={{ "aria-label": "quantity" }}
        />
      </Grid>
      <Grid item xs={4}>
        {dec && (
          <Button
            onClick={() => dec()}
            label="Supprimer"
            Icon={IndeterminateCheckBox}
            disabled={!isDec}
          />
        )}
      </Grid>
    </Grid>
  );
}

QuantityInput.propTypes = {
  quantity: number,
  inc: func,
  dec: func,
  set: func,
};

QuantityInput.defaultProps = {
  quantity: 0,
  set: Function.prototype,
};
