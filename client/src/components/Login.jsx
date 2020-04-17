import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { loginAction } from "../redux/actions/user/loginAction";
import "../style/login/Login.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: "",
      },
    };
  }
  //? Do I want user to be able to access login without logging out?

  onChangeHandler = (evt) => {
    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        [evt.target.name]: evt.target.value,
      },
    });
  };

  onSubmitHandler = (evt) => {
    evt.preventDefault();
    this.props.loginAction(this.state.credentials, this.props.history);
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.onSubmitHandler}>
          <h2>Login</h2>
          {/* {console.log("error", this.props.error)} */}
          {this.props.error && <h3>{this.props.error}</h3>}
          <label>
            Username:{" "}
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.onChangeHandler}
              placeholder="username"
              // className="action-username"
              // required
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
              className="action-password"
              // required
            />
          </label>
          {/* //todo isLoading */}
          <button type="submit">Login</button>
        </form>
        <Link to="/register">Don't have an account?</Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.userReducer.error,
  };
};
export default withRouter(connect(mapStateToProps, { loginAction })(LoginForm));
