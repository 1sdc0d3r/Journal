import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import { removeToken } from "./utils/authService";
//* Actions
import { logoutAction } from "./redux/actions/user/logoutAction";
//* Components
import { PrivateRoute } from "./components/PrivateRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Entry from "./components/Entry";
import JournalPage from "./components/JournalPage";
// import Journal from "./components/Journal";
//* Style
import "./style/App.css";

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
          <button
            onClick={() => {
              removeToken();
              this.props.logoutAction(this.props.history);
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
export default withRouter(connect(mapStateToProps, { logoutAction })(App));
