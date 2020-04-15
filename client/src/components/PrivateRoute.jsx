import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../utils/authService";
import { checkToken } from "../redux/actions/user/checkToken";
const PrivateRoute = ({
  loggedIn,
  checkToken,
  component: Component,
  ...rest
}) => {
  console.log(checkToken());
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
export default connect(mapStateToProps, { checkToken })(PrivateRoute);
