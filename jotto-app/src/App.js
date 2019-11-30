// packages
import React from 'react';

// context

// components
import Congrats from './Congrats';

// assets
import logo from './logo.svg';

// constants

// utils / methods

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Congrats />
        <p>Bueller's in town, fellas!!!</p>
      </header>
    </div>
  );
}

export default App;
