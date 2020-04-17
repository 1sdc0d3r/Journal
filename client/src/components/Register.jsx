import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerAction } from "../redux/actions/user/registerAction";
import "../style/register/Register.css";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      user: {
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
      },
    };
  }

  onChangeHandler = (evt) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [evt.target.name]: evt.target.value,
      },
    });
  };

  onSubmitHandler = (evt) => {
    evt.preventDefault();
    this.props.registerAction(this.state.user, this.props.history);
  };

  render() {
    return (
      <div className="register">
        <h2>Register</h2>
        <form onSubmit={this.onSubmitHandler}>
          {this.props.error && <h3>{this.props.error}</h3>}
          <label>
            First Name:{" "}
            <input
              type="text"
              name="first_name"
              value={this.state.user.first_name}
              onChange={this.onChangeHandler}
              placeholder="first name"
              // required
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
              // required
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
              // required
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
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.userReducer.error,
  };
};

export default connect(mapStateToProps, { registerAction })(RegisterForm);
