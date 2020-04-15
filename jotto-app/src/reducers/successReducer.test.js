import { actionTypes } from '../actions';
import successReducer from './successReducer';

it('returns default initial state of `false` when no action is passed', () => {
  // GIVEN
  const newState = successReducer(undefined, {});

  // WHEN
  // THEN
  expect(newState).toBe(false);
});

it('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
  // GIVEN
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });

  // WHEN
  // THEN
  expect(newState).toBe(true);
});
