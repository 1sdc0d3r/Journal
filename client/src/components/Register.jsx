import React, { Component } from "react";
import axios from "axios";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      user: {
        first_name: null,
        last_name: null,
        email: null,
        username: null,
        password: null
      }
    };
  }

  onChangeHandler = evt => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [evt.target.name]: evt.target.value
      }
    });
  };

  onSubmitHandler = evt => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/register", this.state.user)
      .then(res => {
        localStorage.setItem("journalToken", res.data.token);
      });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        {this.state.error}
        <label>
          First Name:{" "}
          <input
            type="text"
            name="first_name"
            value={this.state.user.first_name}
            onChange={this.onChangeHandler}
            placeholder="first name"
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={this.state.user.last_name}
            onChange={this.onChangeHandler}
            placeholder="last name"
            required
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={this.state.user.email}
            onChange={this.onChangeHandler}
            placeholder="email"
            required
          />
        </label>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={this.state.user.username}
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
            value={this.state.user.password}
            onChange={this.onChangeHandler}
            placeholder="password"
            //? autoComplete="current-password"
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    );
  }
}
