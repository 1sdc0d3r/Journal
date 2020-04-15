import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../utils/authService";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (getToken() ? <Component /> : <Redirect to="login" />)}
    />
  );
};

export default connect(null, {})(PrivateRoute);
