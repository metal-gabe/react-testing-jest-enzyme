// ---------------------------------------------
// ALL IMPORTS
// ---------------------------------------------
// packages
import React from 'react';
import ReactDOM from 'react-dom';

// context

// components
import App from './App';

// assets

// constants

// utils / methods

// styles

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
