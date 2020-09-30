import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import theme from "./theme";
import routes from "./routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          {Object.keys(routes).map((routeName) => {
            const { path, component } = routes[routeName];
            return <Route exact path={path} component={component} key={path} />;
          })}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
