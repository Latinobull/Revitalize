import React, { Component } from 'react';
import './App.css';
import Signup from './component/Signup2.0';
import { AuthProvider } from './Authenticate/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main_Page from './component/Main_Page';
import Login from './component/Login2.0';
class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Main_Page} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
