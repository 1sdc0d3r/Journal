import React, { useState } from "react";
import { connect } from "react-redux";

function RegisterForm() {
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
    console.log(input);
  };

  return (
    <form onSubmit={onSubmitHandler}>
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
          required
        />
      </label>
      <input type="submit" />
    </form>
  );
}

// const mapStateToProps = state => {
//   return {};
// };

export default connect(null, {})(RegisterForm);
