/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React
// Packages
// Context
// Components
// Assets
// Constants
import { actionTypes } from '../actions';

// Utils / Methods
// Styles

/* -------------------------------------------------------------------------- */
/* STUFF */
/* -------------------------------------------------------------------------- */
/**
 * @function secretWordReducer
 * @param {string} state - The state before the reducer.
 * @param {object} action - The action type sent to the reducer.
 * @returns {string} - This is the new state w/ the secret word payload from the action.
 */
export default (state = null, action) => {
  const { SET_SECRET_WORD } = actionTypes;

  switch (action.type) {
    case SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
