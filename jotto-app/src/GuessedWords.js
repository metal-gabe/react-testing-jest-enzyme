// ---------------------------------------------------------------------
// ALL IMPORTS
// ---------------------------------------------------------------------
// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Context

// Components

// Assets

// Constants

// Utils Methods

// Styles

// ---------------------------------------------------------------------
// START OF FUNCTIONAL COMPONENT
// ---------------------------------------------------------------------
const GuessedWords = props => {
  const { guessedWords } = props;

  return (
    <div data-test="component-guessed-words">
      {!guessedWords.length && (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      )}
      {guessedWords.length && (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map(word => {
                const { guessedWord, letterMatchCount } = word;

                return (
                  <tr data-test="guessed-word" key={guessedWord}>
                    <td>{guessedWord}</td>
                    <td>{letterMatchCount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------
// PROP TYPES DECLARATIONS
// ---------------------------------------------------------------------
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default GuessedWords;
