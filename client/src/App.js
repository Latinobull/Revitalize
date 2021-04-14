import React, { Component } from 'react';
import './App.css';
import Signup from './component/Signup2.0';
import { AuthProvider } from './Authenticate/AuthContext';
class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Signup />
      </AuthProvider>
    );
  }
}

export default App;
