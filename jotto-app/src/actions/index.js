export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *    and (conditionally) the CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - The incoming guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = guessedWord => {
  return function (dispatch, getState) {
    //
  };
};
