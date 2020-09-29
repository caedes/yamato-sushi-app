import React from "react";
import { string } from "prop-types";
import {
  Avatar,
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import yamotoLogo from "./yamoto-logo.jpg";
import useStyles from "./styles";

const websiteTitle = "Yamoto Sushi";

export default function Header({ title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Avatar
            alt={websiteTitle}
            src={yamotoLogo}
            className={classes.logo}
          />
          <Typography variant="h6" className={classes.title}>
            {websiteTitle} - {title}
          </Typography>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
