import { actionTypes, correctGuess } from './';

describe('Correct Guess', () => {
  it('returns an action with type `CORRECT_GUESS`', () => {
    // GIVEN
    const action = correctGuess();

    // WHEN
    // THEN
    expect(action).toEqual({
      type: actionTypes.CORRECT_GUESS,
    });
  });
});
