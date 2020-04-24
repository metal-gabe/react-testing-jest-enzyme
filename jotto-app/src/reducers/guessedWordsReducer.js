/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React
// Packages
// Context
// Components
// Assets
// Constants

// Utils / Methods
import { actionTypes } from '../actions';

// Styles

/* -------------------------------------------------------------------------- */
/* START OF DEFAULT EXPORT OF GUESSED WORD REDUCER */
/* -------------------------------------------------------------------------- */
/**
 * @function guessedWordsReducer
 * @param {array} state - An array of guessed words.
 * @param {object} action - The action that is going to be reduced.
 * @returns {array} - An array of the new "guessedWords" state.
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
