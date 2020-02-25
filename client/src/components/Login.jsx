import React, { useState } from "react";

export default function LoginForm() {
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
  );
}
