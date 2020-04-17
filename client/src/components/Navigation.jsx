import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
//* Actions
import { logoutAction } from "../redux/actions/user/logoutAction";
import "../style/navigation/Navigation.css";

function Navigation(props) {
  const { authenticated, logoutAction } = props;
  console.log("authenticated:", authenticated);
  return (
    <nav>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/journal">Journal</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
      <NavLink to="/entry">Entry</NavLink>
      {authenticated && <NavLink to="/settings">Settings</NavLink>}
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
    authenticated: state.userReducer.authenticated,
  };
};
export default connect(mapStateToProps, { logoutAction })(Navigation);
