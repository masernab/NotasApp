import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRouter = ({ isLoggedIn, component: Component, ...res }) => {
  return (
    <Route
      {...res}
      component={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};
