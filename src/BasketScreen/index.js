import React from "react";
import { Button } from "@material-ui/core";
import { useList } from "react-use";

import Screen from "../Screen";
import BasketItemList from "../BasketItemList";

export default function BasketScreen() {
  const [addedSushis, { removeAt, clear }] = useList([
    { id: 1, title: "Sushi 1" },
    { id: 2, title: "Sushi 2" },
    { id: 3, title: "Sushi 3" },
    { id: 4, title: "Sushi 4" },
    { id: 5, title: "Sushi 5" },
    { id: 6, title: "Sushi 6" },
  ]);

  const buy = () => {
    console.log("POST /payment");
    clear();
  };

  return (
    <Screen title="Basket">
      <BasketItemList sushis={addedSushis} removeAt={removeAt} />
      <Button variant="contained" color="primary" onClick={buy}>
        Primary
      </Button>
    </Screen>
  );
}
