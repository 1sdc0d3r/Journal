import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLogin: false,
      user: props.user,
      error: null
    };
  }

  render() {
    return (
      <>
        <nav>
          <NavLink to="/entry">Entry</NavLink>
          <NavLink to="/journal">Journal</NavLink>
        </nav>
        <h2>Dashboard</h2>
        {this.state.error ? (
          <h2>{this.state.error}</h2>
        ) : (
          <h2>Welcome: {this.state.user.username}</h2>
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.userReducer.user };
};
export default connect(mapStateToProps, {})(Dashboard);
