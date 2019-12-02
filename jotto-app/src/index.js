// ---------------------------------------------------------------------
// ALL IMPORTS
// ---------------------------------------------------------------------
// packages
import React from 'react';
import ReactDOM from 'react-dom';

// context

// components
import App from './App';

// assets

// constants

// utils / methods
import * as serviceWorker from './serviceWorker';

// styles
import './index.css';

// ---------------------------------------------------------------------
// START OF REACT DOM
// ---------------------------------------------------------------------
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
