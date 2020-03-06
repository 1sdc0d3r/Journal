import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "react-router-dom";
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
    this.props.loginAction(this.state.credentials, this.props.history);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          {!this.props.error ? null : <h3>{this.state.error}</h3>}
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
  return {
    user: state.userReducer.user,
    error: state.userReducer.error
  };
};
export default connect(mapStateToProps, { loginAction })(LoginForm);
