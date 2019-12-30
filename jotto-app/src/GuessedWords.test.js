// ---------------------------------------------
// ALL IMPORTS
// ---------------------------------------------
// Packages
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Context

// Components
import GuessedWords from './GuessedWords';

// Assets

// Constants

// Utils / Methods
import { checkProps, findByTestAttr } from '../test/testUtils';

// Styles

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
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  it('renders without error', () => {
    // When
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    // Then
    expect(component.length).toBe(1);
  });

  it('renders instructions to guess a word', () => {
    // When
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    // Then
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  it('renders without error', () => {
    // When
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    // Then
    expect(component.length).toBe(1);
  });

  it('renders "guessed words" section', () => {
    // When
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    // Then
    expect(guessedWordsNode.length).toBe(1);
  });

  it('shows correct number of guessed words', () => {
    // When
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
    // Then
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
