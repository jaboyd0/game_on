import React from "react";
import "./App.css";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import App from "./pages/chat/chat";
import {BrowserRouter as Router,Route,Switch,} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={["/", "/SingUp"]} component={SignUp} />
            <Route exact path={["/", "/Home"]} component={Home} />
            {/* <Route excat path={"/Singin"} component={Signin} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


