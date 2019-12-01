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
  //
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
