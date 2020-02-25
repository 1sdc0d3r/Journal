import React from "react";
import "./style/App.css";
import { Route, Switch, NavLink, Link } from "react-router-dom";

//* components
import Login from "./components/Login";
import Register from "./components/Register";

//todo implement GraphQL

function App() {
  return (
    <div className="App">
      <h3>Journal Application</h3>
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
