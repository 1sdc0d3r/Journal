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
import Favorite from "./components/Favorites";
// import Journal from "./components/Journal";
//* Style
import "./style/App.css";

//todo format date
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
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/journal">Journal</NavLink>
          <NavLink to="/favorite">Favorite</NavLink>
          <NavLink to="/entry">Entry</NavLink>
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
          <PrivateRoute path="/favorite" component={Favorite} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default withRouter(connect(mapStateToProps, { logoutAction })(App));
