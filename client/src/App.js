import React from "react";
import "./style/App.css";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutAction } from "./actions/user/logoutAction";

//* components
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Entry from "./components/Entry";

//todo implement GraphQL

function App({ user, logoutAction, loggingOut }) {
  return (
    <div className="App">
      <h3>Journal Application</h3>
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>

        <button onClick={() => logoutAction()}>
          {!loggingOut ? "Logout" : "loggingOut..."}
        </button>
      </nav>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/entry" component={Entry} />
      </Switch>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    loggingOut: state.userReducer.loggingOut
  };
};
export default connect(mapStateToProps, { logoutAction })(App);
