import React, { Component } from "react";
import "./style/App.css";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

//* components
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Entry from "./components/Entry";
// import Journal from "./components/Journal";
import JournalPage from "./components/JournalPage";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";

//todo implement GraphQL
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
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
                redirect: "/login"
              });
            }}
          >
            Logout
          </button>
        </nav>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/entry" component={Entry} />
          <PrivateRoute path="/journal" component={JournalPage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(App);
