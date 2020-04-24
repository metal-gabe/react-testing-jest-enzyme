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
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
        success: false,
      };

      // WHEN
      store.dispatch(guessWord(unsuccessfulGuess));

      // GIVEN
      const newState = store.getState();

      // THEN
      expect(newState).toEqual(expectedState);
    });

    it('updates state correctly for a successful guess', () => {
      // GIVEN
      const expectedState = {
        ...initialState,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
        success: true,
      };

      // WHEN
      store.dispatch(guessWord(secretWord));

      // GIVEN
      const newState = store.getState();

      // THEN
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    let store;
    const guessedWords = [
      {
        guessedWord: 'agile',
        letterMatchCount: 1,
      },
    ];
    const initialState = {
      guessedWords,
      secretWord,
    };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it('updates state correctly for an unsuccessful guess', () => {
      // GIVEN
      const expectedState = {
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
        secretWord,
        success: false,
      };

      // WHEN
      store.dispatch(guessWord(unsuccessfulGuess));

      // GIVEN
      const newState = store.getState();

      // THEN
      expect(newState).toEqual(expectedState);
    });

    it('updates state correctly for a successful guess', () => {
      // GIVEN
      const expectedState = {
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
        secretWord,
        success: true,
      };

      // WHEN
      store.dispatch(guessWord(secretWord));

      // GIVEN
      const newState = store.getState();

      // THEN
      expect(newState).toEqual(expectedState);
    });
  });
});
