/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React
import React from 'react';
import { shallow } from 'enzyme';

// Packages
// Context

// Components
import Input from './Input';

// Assets
// Constants

// Utils / Methods
import { findByTestAttr, storeFactory } from '../test/testUtils';

// Styles

/* -------------------------------------------------------------------------- */
/* INITIAL SETUP STEPS */
/* -------------------------------------------------------------------------- */
/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

/* -------------------------------------------------------------------------- */
/* START OF UNIT TESTS FOR THE INPUT COMPONENT */
/* -------------------------------------------------------------------------- */
describe('render', () => {
  describe('word has not been guessed', () => {
    it('renders the component without error', () => {
      // GIVEN// WHEN// THEN
    });

    it('renders the input box', () => {
      // GIVEN// WHEN// THEN
    });

    it('renders the submit button', () => {
      // GIVEN// WHEN// THEN
    });
  });

  describe('word has been guessed', () => {
    it('renders the component without error', () => {
      // GIVEN// WHEN// THEN
    });

    it('does NOT render the input box', () => {
      // GIVEN// WHEN// THEN
    });

    it('does NOT render the submit button', () => {
      // GIVEN// WHEN// THEN
    });
  });
});

describe('update state', () => {});
