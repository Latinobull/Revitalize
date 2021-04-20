import React, { Component } from "react";
import "./App.css";
import Signup from "./component/Signup2.0";
import { AuthProvider } from "./Authenticate/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main_Page from "./component/Main_Page";
import Login from "./component/Login2.0";
import Recipes from "./component/Recipes/Recipes";
import Journals from "./component/Journals/index";
import PrivateRoute from "./component/PrivateRoute";
import Appbar from "./component/Appbar";


class App extends Component {
  render() {
    return (
      <Router>
        <Appbar />
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Main_Page} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/journals" component={Journals} />
          </Switch>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
