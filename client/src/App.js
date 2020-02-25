import React from "react";
import "./style/App.css";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutAction } from "./actions/logoutAction";

//* components
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

//todo implement GraphQL

function App({ user, logoutAction }) {
  return (
    <div className="App">
      <h3>Journal Application</h3>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <button onClick={() => logoutAction()}>
          {!user ? "Logout" : "loggingOut..."}
        </button>
      </nav>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};
export default connect(mapStateToProps, { logoutAction })(App);
