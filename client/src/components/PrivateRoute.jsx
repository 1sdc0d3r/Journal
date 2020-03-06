import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../utils/authService";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => (getToken() ? <Component /> : <Redirect to="login" />)}
  />
);
