import React from "react";
import { IconButton, Input } from "@material-ui/core";
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";
import { func, number } from "prop-types";

function Button({ onClick, label, Icon }) {
  return (
    <IconButton aria-label={label} onClick={onClick}>
      <Icon fontSize="inherit" />
    </IconButton>
  );
}

export default function QuantityInput({ quantity, inc, dec, set }) {
  return (
    <>
      {inc && <Button onClick={() => inc()} label="Ajouter" Icon={AddBox} />}
      <Input
        name="quantity"
        value={quantity}
        onChange={(event) => set(event.target.value)}
        inputProps={{ "aria-label": "quantity" }}
      />
      {dec && (
        <Button
          onClick={() => dec()}
          label="Supprimer"
          Icon={IndeterminateCheckBox}
        />
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
