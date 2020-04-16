import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
//* Actions
import { logoutAction } from "../redux/actions/user/logoutAction";
import "../style/navigation/Navigation.css";

function Navigation(props) {
  const { authenticated, logoutAction } = props;
  return (
    //todo don't show register, and login when logged in
    <nav>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/journal">Journal</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
      <NavLink to="/entry">Entry</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      {!authenticated && <NavLink to="/login">Login</NavLink>}
      {!authenticated && <NavLink to="/register">Register</NavLink>}
      {authenticated && (
        <NavLink to="/login" onClick={logoutAction}>
          Logout
        </NavLink>
      )}
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    authenticated: state.userReducer.authenticated,
  };
};
export default connect(mapStateToProps, { logoutAction })(Navigation);
