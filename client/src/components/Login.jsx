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
        password: ""
      }
    };
  }
  //todo re-render this component when using <Redirect />
  componentDidMount() {
    console.log("LOGIN MOUNTED");
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
      <div className="login">
        <form onSubmit={this.onSubmitHandler}>
          <h2>Login</h2>
          {this.props.error && <h3>{this.props.error}</h3>}
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
          {/* //todo isLoading */}
          <button type="submit">Login</button>
        </form>
        <span>Don't have an account? </span>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    error: state.userReducer.error
  };
};
export default withRouter(connect(mapStateToProps, { loginAction })(LoginForm));
