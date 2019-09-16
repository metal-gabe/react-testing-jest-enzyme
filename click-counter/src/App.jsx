import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div data-test="component-app">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bueller lives here.</p>
      </div>
    );
  };
};

export default App;
