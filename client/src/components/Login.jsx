import React, { Component } from "react";
import axios from "axios";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: null,
        password: null
      },
      error: null
    };
  }

  onChangeHandler = evt => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value
    });
  };

  onSubmitHandler = evt => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("journalToken", res.data.token);
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          {!this.state.error ? null : <h3>{this.state.error}</h3>}
          <label>
            Username:{" "}
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.onChangeHandler}
              placeholder="username"
              required
            />
          </label>
          <label>
            Password:{" "}
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.onChangeHandler}
              placeholder="password"
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}
