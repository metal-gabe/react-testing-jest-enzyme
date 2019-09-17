import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    [
      // prettier-ignore
      'handleClick',
      'resetCounter',
    ].forEach(m => {
      this[m] = this[m].bind(this);
    });
  }

  handleClick() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  resetCounter() {
    this.setState({ counter: 0 });
  }

  render() {
    const { counter } = this.state;

    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently... {counter}
        </h1>
        <button data-test="increment-button" onClick={this.handleClick}>
          Increment counter
        </button>
        <button
          data-test="reset-button"
          className="counter-reset"
          onClick={this.resetCounter}
        >
          Reset Counter
        </button>
      </div>
    );
  }
}

export default App;
