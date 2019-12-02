// ---------------------------------------------------------------------
// ALL IMPORTS
// ---------------------------------------------------------------------
// packages
import React from 'react';
import PropTypes from 'prop-types';

// context

// components

// assets

// constants

// utils / methods

// styles

// ---------------------------------------------------------------------
// START OF FUNCTIONAL COMPONENT
// ---------------------------------------------------------------------
const GuessedWords = props => {
  const { guessedWords } = props;
  let guessedWordsContent;

  if (!guessedWords.length) {
    guessedWordsContent = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  } else {
    guessedWordsContent = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{
            guessedWords.map(word => {
              const { guessedWord, letterMatchCount } = word;

              return (
                <tr data-test="guessed-word" key={guessedWord}>
                  <td>{guessedWord}</td>
                  <td>{letterMatchCount}</td>
                </tr>
              );
            })
          }</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guessed-words">{guessedWordsContent}</div>;
};

// ---------------------------------------------------------------------
// PROP TYPES DECLARATIONS
// ---------------------------------------------------------------------
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
