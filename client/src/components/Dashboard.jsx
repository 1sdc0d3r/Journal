import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { logoutAction } from "../actions/user/logoutAction";

function Dashboard(props) {
  const { user, error, loggingOut, logoutAction } = props;
  if (!user) {
    props.history.push("/login");
  }

  return (
    <>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/entry">Entry</NavLink>
        <button onClick={() => logoutAction()}>
          {!loggingOut ? "Logout" : "loggingOut..."}
        </button>
      </nav>
      <h2>Dashboard</h2>
      {error ? <h2>{error}</h2> : null}
      {user ? <h2>Welcome: {user.first_name}</h2> : null}
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    loggingOut: state.userReducer.loggingOut,
    error: state.userReducer.error
  };
};
export default connect(mapStateToProps, { logoutAction })(Dashboard);
