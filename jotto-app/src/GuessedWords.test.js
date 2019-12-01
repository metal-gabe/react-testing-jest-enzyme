// ---------------------------------------------
// ALL IMPORTS
// ---------------------------------------------
// packages
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// context

// components
import GuessedWords from './GuessedWords';

// assets

// constants

// utils / methods
import { checkProps, findByTestAttr } from '../test/testUtils';

// styles

Enzyme.configure({ adapter: new EnzymeAdapter() });
const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

// ---------------------------------------------
// START OF ALL TESTS
// ---------------------------------------------
it('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  //
});

describe('if there are words guessed', () => {
  //
});
