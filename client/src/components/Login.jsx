import React, { useState } from "react";
import { connect } from "react-redux";

import { loginAction } from "../actions/user/loginAction";

function LoginForm(props) {
  const { isLoggingIn, loginAction, error, user } = props;
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
  //! warning: "can't update during state transition..."
  if (user) {
    props.history.push("/dashboard");
  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        {!error ? null : <h3>{error}</h3>}
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
    error: state.userReducer.error,
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, { loginAction })(LoginForm);
