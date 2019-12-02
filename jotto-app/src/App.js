// ---------------------------------------------------------------------
// ALL IMPORTS
// ---------------------------------------------------------------------
// packages
import React from 'react';

// context

// components
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

// assets
import logo from './logo.svg';

// constants

// utils / methods

// styles
import './App.css';

// ---------------------------------------------------------------------
// START OF FUNCTIONAL COMPONENT
// ---------------------------------------------------------------------
function App() {
  const success = false;
  const guessedWords = [];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Congrats success={success} />
        <GuessedWords guessedWords={guessedWords} />
      </header>
    </div>
  );
}

export default App;
