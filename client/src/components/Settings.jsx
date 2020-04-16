import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteUser } from "../redux/actions/user/settings/deleteUser";

function Settings({ deleteUser }) {
  return (
    <>
      <h2>Settings</h2>
      //todo are you sure? double auth
      <button onClick={() => deleteUser()}>Delete User</button>
    </>
  );
}
const mapStateToProps = (state) => {
  return {};
};
export default withRouter(connect(mapStateToProps, { deleteUser })(Settings));
