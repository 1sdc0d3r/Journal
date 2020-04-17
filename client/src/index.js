import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

import history from "./config/history";
// import httpService from "./utils/httpService";

//* REDUX
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";

//* REDUX MIDDLEWARE
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

// httpService.setupInterceptors(history); //todo check out this function more

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
