import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      hasError: false,
    };

    [
      // prettier-ignore
      'handleClick',
      'handleDecrementClick',
    ].forEach(m => {
      this[m] = this[m].bind(this);
    });
  }

  handleClick(operator) {
    const { counter } = this.state;

    switch (operator) {
      case 'add':
        this.setState({ counter: counter + 1, hasError: false });
        break;
      case 'subtract':
        this.setState({ counter: counter - 1 });
        break;
      case 'multiply':
        this.setState({ counter: counter * 2 });
        break;
      case 'divide':
        this.setState({ counter: counter / 2 });
        break;
      default:
        this.setState({ counter: 0, hasError: false });
        break;
    }
  }

  handleDecrementClick() {
    const { counter } = this.state;

    if (counter === 0) {
      this.setState({ hasError: true });
    } else {
      this.handleClick('subtract');
    }
  }

  render() {
    const { counter, hasError } = this.state;

    return (
      <div data-test="component-app">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 data-test="counter-display">
          The counter is currently... {counter}
        </h1>
        <button
          data-test="increment-button"
          onClick={() => this.handleClick('add')}
        >
          Increment Counter
        </button>
        <button
          data-test="decrement-button"
          onClick={this.handleDecrementClick}
        >
          Decrement Counter
        </button>
        <button data-test="reset-button" onClick={this.handleClick}>
          Reset Counter
        </button>
        {hasError && (
          <div className="error" data-test="counter-error">
            This counter cannot go below 0, sucka!
          </div>
        )}
      </div>
    );
  }
}

export default App;
