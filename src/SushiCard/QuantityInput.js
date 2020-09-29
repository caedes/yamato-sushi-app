import React from "react";
import { IconButton, Input } from "@material-ui/core";
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";
import { func, number } from "prop-types";

export default function QuantityInput({ quantity, inc, dec, set }) {
  return (
    <>
      {inc && (
        <IconButton aria-label="ajouter" onClick={() => inc()}>
          <AddBox fontSize="inherit" />
        </IconButton>
      )}
      <Input
        name="quantity"
        value={quantity}
        onChange={(event) => set(event.target.value)}
        inputProps={{ "aria-label": "quantity" }}
      />
      {dec && (
        <IconButton aria-label="supprimer" onClick={() => dec()}>
          <IndeterminateCheckBox fontSize="inherit" />
        </IconButton>
      )}
    </>
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
