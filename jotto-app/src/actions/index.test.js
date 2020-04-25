/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React

// Packages
import moxios from 'moxios';

// Context
// Components
// Assets
// Constants

// Utils / Methods
import { getSecretWord } from './';
import { storeFactory } from '../../test/testUtils';

// Styles

/* -------------------------------------------------------------------------- */
/* START OF CUSTOM TESTS FOR ACTIONS */
/* -------------------------------------------------------------------------- */
describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('adds response word to state', () => {
    // GIVEN
    const secretWord = 'party';
    const store = storeFactory();

    // WHEN
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        response: secretWord,
        status: 200,
      });
    });

    // THEN
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();

      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
