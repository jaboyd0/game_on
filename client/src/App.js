import  React from "react";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>

          <Route exact path={["/", "/SignUp"]} component={SignUp} /> 
            <Route exact path="/Home" component={Home} />
            <Route exact path={"/SignIn"} component={SignIn} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


