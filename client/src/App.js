import React from "react";
import "./style/App.css";
import { Route, Switch, NavLink, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";


//* components
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Entry from "./components/Entry";
// import Journal from "./components/Journal";
import JournalPage from "./components/JournalPage";

//todo implement GraphQL

function App(props) {
  const { user } = props;
  return (
    <div className="App">
      <h3>Journal Application</h3>
      <nav>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/journal">Journal</NavLink>
    
      </nav>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/entry" component={Entry} />
        <Route path="/journal" component={JournalPage} />
        //todo change to Journal component
      </Switch>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};
export default connect(mapStateToProps)(App);
