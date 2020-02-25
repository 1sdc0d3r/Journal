import React, { useState } from "react";
import { connect } from "react-redux";

import { logoutAction } from "../actions/logoutAction";

function LoginForm({ loggedIn, logoutAction }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const onChangeHandler = evt => {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value
    });
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    console.log("login credentials", credentials);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={onChangeHandler}
            placeholder="username"
            required
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChangeHandler}
            placeholder="password"
            required
          />
        </label>
        <input type="submit" />
      </form>
      <button onClick={() => logoutAction()}>
        {loggedIn ? "true" : "false"}
      </button>
    </>
  );
}

const mapStateToProps = state => {
  // console.log(`state: ${state.userReducer.loggedIn}`);
  return {
    loggedIn: state.userReducer.loggedIn
  };
};

export default connect(mapStateToProps, { logoutAction })(LoginForm);
