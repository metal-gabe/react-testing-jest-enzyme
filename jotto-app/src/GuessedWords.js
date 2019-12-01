// ---------------------------------------------
// ALL IMPORTS
// ---------------------------------------------
// packages
import React from 'react';
import PropTypes from 'prop-types';

// context

// components

// assets

// constants

// utils / methods

// styles

const GuessedWords = props => {
  const { guessedWords } = props;

  let guessedWordsContent;
  if (!guessedWords.length) {
    guessedWordsContent = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  }

  return (
    <div data-test="component-guessed-words">{guessedWordsContent}</div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
