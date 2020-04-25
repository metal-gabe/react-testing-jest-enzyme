/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React
// Packages
import axios from 'axios';

// Context
// Components
// Assets
// Constants

// Utils / Methods
import { getLetterMatchCount } from '../helpers';

// Styles

/* -------------------------------------------------------------------------- */
/* START OF CUSTOM ACTION UTILS EXPORTS */
/* -------------------------------------------------------------------------- */
export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *    and (conditionally) the CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - The incoming guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = guessedWord => {
  const { CORRECT_GUESS, GUESS_WORD } = actionTypes;

  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      payload: {
        guessedWord,
        letterMatchCount,
      },
      type: GUESS_WORD,
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: CORRECT_GUESS,
      });
    }
  };
};

export const getSecretWord = () => {
  return dispatch => {
    axios.get('http://localhost:3030/');
  };
};
