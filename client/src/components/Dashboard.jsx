import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Dashboard({ user, error }) {
  console.log("DASHBOARD");
  return (
    <>
      <nav>
        <NavLink to="/entry">Entry</NavLink>
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
    error: state.userReducer.error
  };
};
export default connect(mapStateToProps, {})(Dashboard);
