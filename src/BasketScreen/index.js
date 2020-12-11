import React from "react";
import { Button } from "@material-ui/core";

import Screen from "../Screen";
import BasketItemList from "../BasketItemList";

export default function BasketScreen() {
  const buy = () => {
    console.log("POST /payment");
  };

  return (
    <Screen title="Basket">
      <BasketItemList />
      <Button variant="contained" color="primary" onClick={buy}>
        Primary
      </Button>
    </Screen>
  );
}
