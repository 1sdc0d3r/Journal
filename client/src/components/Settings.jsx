import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteUser } from "../Redux/actions/user/deleteUser";

function Settings({ deleteUser, history, error }) {
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <h1>Settings</h1>
      {error && <h3>{error}</h3>}
      {!confirm ? (
        <button onClick={() => setConfirm(true)}>Delete User</button>
      ) : (
        <div>
          <h2>Are you sure?</h2>
          <button onClick={() => deleteUser(history)}>Yes</button>
          <button onClick={() => setConfirm(false)}>No</button>
        </div>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return { error: state.userReducer.error };
};
export default withRouter(connect(mapStateToProps, { deleteUser })(Settings));
