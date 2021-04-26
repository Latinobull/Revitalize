import React, { Component } from 'react';
import './App.css';
import Signup from './component/Signup2.0';
import { AuthProvider } from './Authenticate/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main_Page from './component/Main_Page';
import Login from './component/Login2.0';
import Recipes from './component/Recipes/Recipes';
import Journals from './component/Journals/index';
import DisplayCard from './component/Journals/DisplayCard/index';
import PrivateRoute from './component/PrivateRoute';
import Appbar from './component/Appbar';
import Chat from './component/Chat';
import Profile from './component/Profile';
import MeditationFacts from './component/Meditation';
import Session from './component/Meditation/Session';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <Appbar />
          <Switch>
            <PrivateRoute exact path="/" component={Main_Page} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/recipes" component={Recipes} />
            <PrivateRoute path="/journals" component={Journals} />
            <Route path="/journalsdisp" component={DisplayCard} />
            <PrivateRoute path="/meditation" component={MeditationFacts} />
            <PrivateRoute path="/chat" component={Chat} />
            <PrivateRoute path="/session" component={Session} />
            <PrivateRoute path="/Profile/:uid" component={Profile} />
          </Switch>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
