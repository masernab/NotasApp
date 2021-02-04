import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PublicRouter = ({ isLoggedIn, component: Component, ...res }) => {
  return (
    <Route
      {...res}
      component={(props) =>
        isLoggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
