import React from "react";
import { number, string } from "prop-types";
import {
  Avatar,
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

import yamotoLogo from "./yamoto-logo.jpg";
import useStyles from "./styles";

const websiteTitle = "Yamoto Sushi";

export default function Header({ title, basketCount }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <Avatar
              alt={websiteTitle}
              src={yamotoLogo}
              className={classes.logo}
            />
          </Link>
          <Typography variant="h6" className={classes.title}>
            {websiteTitle} - {title}
          </Typography>
          <IconButton
            component={Link}
            to="/basket"
            aria-label={`show ${basketCount} new notifications`}
            color="inherit"
          >
            <Badge badgeContent={basketCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton
            component={Link}
            to="/settings"
            aria-label="settings"
            color="inherit"
          >
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  title: string.isRequired,
  basketCount: number,
};

Header.defaultProps = {
  basketCount: 0,
};
