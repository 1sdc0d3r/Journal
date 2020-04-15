import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import { getToken } from "./utils/authService";
import { checkToken } from "./redux/actions/user/checkToken";
//* Components
import PrivateRoute from "./components/PrivateRoute";
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

// todo stay logged in if there is a token, save user data as well???
//todo format date
//todo fix autologout, server side
//todo not able to add entries/access journal when first register
//todo fix errors between register and login components (server error?)
//todo fix logging in each time page refreshes
// todo allow user to delete account/user w/ all entries
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

  componentDidMount() {
    console.log("APP MOUNT");
    this.props.checkToken();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/entry" component={Entry} />
          <PrivateRoute path="/journal" component={JournalPage} />
          <PrivateRoute path="/favorite" component={Favorite} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, { checkToken })(App));
