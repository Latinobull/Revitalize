import React, { Component } from 'react';
import './App.css';
import Signup from './component/Signup';
console.log(process.env.REACT_APP_API_KEY)

class App extends Component {
  render() {
    return <Signup />;
  }
}

export default App;
