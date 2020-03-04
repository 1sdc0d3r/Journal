import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      user: {
        first_name: null,
        last_name: null
      }
    };
  }

  render() {
    return (
      <>
        <nav>
          <NavLink to="/entry">Entry</NavLink>
          <NavLink to="/journal">Journal</NavLink>
          <button onClick={() => localStorage.removeItem("journalToken")}>
            Logout
          </button>
        </nav>
        <h2>Dashboard</h2>
        {this.state.error ? (
          <h2>{this.state.error}</h2>
        ) : (
          <h2>Welcome: {this.state.user.first_name}</h2>
        )}
      </>
    );
  }
}
