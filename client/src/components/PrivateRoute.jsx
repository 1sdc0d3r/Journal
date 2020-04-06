import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../utils/authService";
const PrivateRoute = ({ loggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (loggedIn ? <Component /> : <Redirect to="login" />)}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    loggedIn: state.userReducer.loggedIn,
  };
};
export default connect(mapStateToProps, {})(PrivateRoute);
