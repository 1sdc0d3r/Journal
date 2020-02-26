import React from "react";
import { connect } from "react-redux";

function Dashboard({ user }) {
  console.log("DASHBOARD");
  return (
    <>
      <h2>Dashboard</h2>
      <h2>Welcome: {user ? user.first_name : "noUser"}</h2>
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};
export default connect(mapStateToProps, {})(Dashboard);
