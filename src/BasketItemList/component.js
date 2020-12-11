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
      {sushis.map(({ sushiId, count, title }, i) => (
        <ListItem key={sushiId}>
          <ListItemText primary={title} secondary={count} />
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
      sushiId: number,
      count: number,
      title: string,
    })
  ),
  removeAt: func,
};

BasketItemList.defaultProps = {
  removeAt: Function.prototype,
};
