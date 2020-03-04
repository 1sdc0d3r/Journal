import React, { Component } from "react";
import "./style/App.css";
import { Route, Switch, NavLink, Link, Redirect } from "react-router-dom";

//* components
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Entry from "./components/Entry";
// import Journal from "./components/Journal";
import JournalPage from "./components/JournalPage";
import { connect } from "react-redux";

//todo implement GraphQL

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLogin: false
    };
  }

  render() {
    if (this.state.toLogin) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="App">
        <h3>Journal Application</h3>
        <nav>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/journal">Journal</NavLink>
          <button
            onClick={() => {
              localStorage.removeItem("journalToken");
              this.setState({
                ...this.state,
                toLogin: true
              });
            }}
          >
            Logout
          </button>
        </nav>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/entry" component={Entry} />
          <Route path="/journal" component={JournalPage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(App);
