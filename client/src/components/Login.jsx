import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDashboard: false,
      credentials: {
        username: "",
        password: ""
      },
      error: null
    };
  }

  onChangeHandler = evt => {
    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        [evt.target.name]: evt.target.value
      }
    });
  };

  onSubmitHandler = evt => {
    evt.preventDefault();
    // axios
    //   .get("http://localhost:5000/api/auth/login", {
    //     headers: this.state.credentials
    //   })
    //   .then(res => {
    //     localStorage.setItem("journalToken", res.data.token);
    //     this.setState({
    //       ...this.state,
    //       toDashboard: true
    //     });
    //   })
    //   .catch(err => console.log("error", err.response.data.message));
  };

  render() {
    if (this.state.toDashboard === true) {
      return (
        <Redirect to={{ pathname: "/dashboard", state: this.state.user }} />
      );
    }

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
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(LoginForm);
