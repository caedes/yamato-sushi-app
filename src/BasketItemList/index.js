import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { arrayOf, func, number, shape, string } from "prop-types";

export default function BasketItemList({ sushis, removeAt }) {
  return (
    <List component="ol" aria-label="basket item list">
      {sushis.map(({ id, title }, i) => (
        <ListItem key={id}>
          <ListItemText primary={title} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => removeAt(i)}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

BasketItemList.propTypes = {
  sushis: arrayOf(
    shape({
      id: number,
      title: string,
    })
  ),
  removeAt: func,
};
