import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
//* Components
import { PrivateRoute } from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
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
//todo fix autologout, server side
//todo fix errors between register and login components
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="App">
        {/* <h3>Journal Application</h3> */}
        <Navigation />
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

export default withRouter(connect(null, {})(App));
