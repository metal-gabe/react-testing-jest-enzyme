import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
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
it('renders the counter display', () => {
  // When
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  // Then
  expect(counterDisplay.length).toBe(1);
});
it('starts the counter display at 0', () => {
  // When
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');

  // Then
  expect(initialCounterState).toBe(0);
});
it('renders the Increment button', () => {
  // When
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');

  // Then
  expect(button.length).toBe(1);
});
it('renders the Decrement button', () => {
  // When
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');

  // Then
  expect(button.length).toBe(1);
});
it('renders the Reset button', () => {
  // When
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'reset-button');

  // Then
  expect(button.length).toBe(1);
});
it('increases counter display by 1 when clicking the Increment button', () => {
  // When
  const counter = 7;
  const wrapper = setup(null, { counter });

  // Find button and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  // Find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  // Then
  expect(counterDisplay.text()).toContain(counter + 1);
});
it('decreases counter display by 1 when clicking the Decrement button', () => {
  // When
  const counter = 7;
  const wrapper = setup(null, { counter });

  // Find button and click
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  // Find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  // Then
  expect(counterDisplay.text()).toContain(counter - 1);
});
it('renders an error message when counter tries to go below 0', () => {
  // When
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  const error = findByTestAttr(wrapper, 'counter-error');

  // Then
  expect(error.length).toBe(1);
});
