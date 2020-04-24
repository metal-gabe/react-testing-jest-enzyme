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
import { guessWord } from './actions';
import { storeFactory } from '../test/testUtils';

// Styles

/* -------------------------------------------------------------------------- */
/* START OF CUSTOM INTEGRATION TESTS */
/* -------------------------------------------------------------------------- */
describe('`guessWord` Action Dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed words', () => {
    let store;
    const initialState = {
      secretWord,
    };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it('updates state correctly for an unsuccessful guess', () => {
      // GIVEN
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };

      // WHEN
      store.dispatch(guessWord(unsuccessfulGuess));

      // GIVEN
      const newState = store.getState();

      // THEN
      expect(newState).toEqual(expectedState);
    });

    it('updates state correctly for a successful guess', () => {
      // GIVEN// WHEN// THEN
    });
  });

  describe('some guessed words', () => {
    it('updates state correctly for an unsuccessful guess', () => {
      // GIVEN// WHEN// THEN
    });

    it('updates state correctly for a successful guess', () => {
      // GIVEN// WHEN// THEN
    });
  });
});
