import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";

import configureStore from "./store/configureStore";
import { loadCourses } from "./actions/CourseActions";
import routes from "./routes";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

const store = configureStore();

store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById("app")
);
