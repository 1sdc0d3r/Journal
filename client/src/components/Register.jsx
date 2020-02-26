import React, { useState } from "react";
import { connect } from "react-redux";
import { registerAction } from "../actions/registerAction";

function RegisterForm(props) {
  const { isRegistering, registerAction, error } = props;
  const [input, setInput] = useState({
    fName: "",
    lName: "",
    email: "",
    username: "",
    password: ""
  });

  const onChangeHandler = evt => {
    setInput({
      ...input,
      [evt.target.name]: evt.target.value
    });
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    const newUser = {
      first_name: input.fName,
      last_name: input.lName,
      email: input.email,
      username: input.username,
      password: input.password
    };
    registerAction(newUser);
  };
  //! warning: "can't update during state transition..."
  if (error === "success") {
    props.history.push("/");
  }
  return (
    <form onSubmit={onSubmitHandler}>
      {!error ? <h3>NoError</h3> : <h3>{error}</h3>}
      <label>
        First Name:{" "}
        <input
          type="text"
          name="fName"
          value={input.fName}
          onChange={onChangeHandler}
          placeholder="first name"
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lName"
          value={input.lName}
          onChange={onChangeHandler}
          placeholder="last name"
          required
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={onChangeHandler}
          placeholder="email"
          required
        />
      </label>
      <label>
        Username:{" "}
        <input
          type="text"
          name="username"
          value={input.username}
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
          value={input.password}
          onChange={onChangeHandler}
          placeholder="password"
          //todo autoComplete="current-password"
          required
        />
      </label>
      <button type="submit">
        {isRegistering ? "Registering..." : "Register"}
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    isRegistering: state.userReducer.isRegistering,
    error: state.userReducer.error
  };
};

export default connect(mapStateToProps, { registerAction })(RegisterForm);
