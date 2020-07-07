import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/signup";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={["/", "/singup"]} component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
