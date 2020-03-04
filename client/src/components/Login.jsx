import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginAction } from "../redux/actions/user/loginAction";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDashboard: false,
      credentials: {
        username: "",
        password: ""
      },
      error: null,
      login: props.loginAction
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
    this.state.login(this.state.credentials);
    this.setState({ ...this.state, toDashboard: true });
  };

  render() {
    if (this.state.toDashboard) {
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
export default connect(mapStateToProps, { loginAction })(LoginForm);
