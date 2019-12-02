// ---------------------------------------------------------------------
// ALL IMPORTS
// ---------------------------------------------------------------------
// packages
import React, { Component } from 'react';

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
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: true,
      guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 },
      ],
    };
  }

  render() {
    const { guessedWords, success } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jotto Game</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Congrats success={success} />
          <GuessedWords guessedWords={guessedWords} />
        </header>
      </div>
    );
  }
}

export default App;
