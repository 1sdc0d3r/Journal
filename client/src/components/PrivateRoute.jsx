import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (authenticated ? <Component /> : <Redirect to="login" />)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.userReducer.authenticated,
  };
};
export default connect(mapStateToProps, {})(PrivateRoute);
