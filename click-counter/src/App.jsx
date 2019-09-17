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
    ].forEach(m => {
      this[m] = this[m].bind(this);
    });
  }

  handleClick(operator) {
    const { counter } = this.state;
    switch (operator) {
      case 'add':
        this.setState({ counter: counter + 1 });
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
        this.setState({ counter: 0 });
        break;
    }
  }

  render() {
    const { counter } = this.state;

    return (
      <div data-test="component-app">
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
          onClick={() => this.handleClick('subtract')}
        >
          Decrement Counter
        </button>
        <button data-test="reset-button" onClick={this.handleClick}>
          Reset Counter
        </button>
      </div>
    );
  }
}

export default App;
