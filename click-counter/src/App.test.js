import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props={}, state=null) => {
  return shallow(<App {...props} />);
};


/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

// ---------------------------------------------
// LET'S BEGIN THE TESTS
// ---------------------------------------------
it('renders without error', () => {
  // When
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');

  // Then
  expect(appComponent.length).toBe(1);
});
it('renders increment button', () => {
  // When
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');

  // Then
  expect(button.length).toBe(1);
});
it('renders counter display', () => {
  // When
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  // Then
  expect(counterDisplay.length).toBe(1);
});
it('counter starts at 0', () => {
  // put stuff here
});
it('clicking button increments counter display', () => {
  // put stuff here
});
