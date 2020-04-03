import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
//* Actions
import { logoutAction } from "../redux/actions/user/logoutAction";
import "../style/navigation/Navigation.css";

function Navigation(props) {
  const { logoutAction } = props;
  return (
    //todo don't show register, and login when logged in
    <nav>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/journal">Journal</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
      <NavLink to="/entry">Entry</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/login" onClick={logoutAction}>
        Logout
      </NavLink>
    </nav>
  );
}
export default connect(null, { logoutAction })(Navigation);
