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
// Styles

/* -------------------------------------------------------------------------- */
/* START OF CUSTOM HELPER UTILS EXPORTS */
/* -------------------------------------------------------------------------- */
/**
 * @method getLetterMatchCount
 * @param { string } guessedWord - Guessed word.
 * @param { string } secretWord - Secret word.
 * @returns { number } - Number of letters matched between guessed word and secret word.
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));

  const foundLetters = [...secretLetterSet].filter(letter => {
    return guessedLetterSet.has(letter);
  });

  return foundLetters.length;
}
