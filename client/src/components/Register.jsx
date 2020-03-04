import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDashboard: false,
      error: null,
      user: {}
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
    // axios
    //   .post("http://localhost:5000/api/auth/register", this.state.user)
    //   .then(res => {
    //     localStorage.setItem("journalToken", res.data.token);
    //     this.setState({
    //       ...this.state,
    //       toDashboard: true
    //     });
    //   })
    //   .catch(err => {
    //     this.setState({
    //       ...this.state,
    //       error: err.response.data.errorMessage
    //     });
    //   });
  };

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to={{ pathname: "/dashboard" }} />;
    }

    return (
      <form onSubmit={this.onSubmitHandler}>
        <h3>{this.state.error}</h3>
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
const mapStateToProps = state => {
  // console.log(state.userReducer.user);
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, {})(RegisterForm);
