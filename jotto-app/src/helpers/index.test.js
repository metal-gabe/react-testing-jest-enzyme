// -----------------------------------------------------------------------------
// ALL IMPORTS
// -----------------------------------------------------------------------------
// React
// Packages
import { getLetterMatchCount } from './';

// Context
// Components
// Assets
// Constants
// Utils / Methods
// Styles

// -----------------------------------------------------------------------------
// START OF UNIT TESTS FOR HELPER FUNCTIONS
// -----------------------------------------------------------------------------
describe('Testing "getLetterMatchCount"', () => {
  const secretWord = 'party';

  it('returns the correct count when there are no matching letters', () => {
    // GIVEN
    const letterMatchCount = getLetterMatchCount('bones', secretWord);

    // WHEN
    // THEN
    expect(letterMatchCount).toBe(0);
  });

  it('returns the correct count when there are 3 matching letters', () => {
    // GIVEN
    const letterMatchCount = getLetterMatchCount('train', secretWord);

    // WHEN
    // THEN
    expect(letterMatchCount).toBe(3);
  });

  it('returns the correct count when there are duplicate letters in the guess', () => {
    // GIVEN
    const letterMatchCount = getLetterMatchCount('parka', secretWord);

    // WHEN
    // THEN
    expect(letterMatchCount).toBe(3);
  });
});
