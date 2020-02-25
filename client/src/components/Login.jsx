import React, { useState } from "react";
import { connect } from "react-redux";

import { loginAction } from "../actions/loginAction";

function LoginForm({ isLoggingIn, loginAction }) {
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
    loginAction(credentials);
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
        <button type="submit">{!isLoggingIn ? "Login" : "Loading..."}</button>
      </form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.userReducer.isLoggingIn,
    loggedIn: state.userReducer.loggedIn
  };
};

export default connect(mapStateToProps, { loginAction })(LoginForm);
