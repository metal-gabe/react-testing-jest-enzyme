// packages
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// context

// components
import Congrats from './Congrats';

// constants

// utils / methods
import { checkProps, findByTestAttr } from '../test/testUtils';

// styles

Enzyme.configure({ adapter: new EnzymeAdapter() });
const defaultProps = {
  success: false,
};

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

// ---------------------------------------------
// START OF ALL TESTS
// ---------------------------------------------
it('renders without error', () => {
  // When
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  // Then
  expect(component.length).toBe(1);
});

it('renders no text when "success" prop is false', () => {
  // When
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  // Then
  expect(component.text()).toBe('');
});

it('renders non-empty congrats message when "success" prop is true', () => {
  // When
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  // Then
  expect(message.text().length).not.toBe(0);
});

it('does not throw warning with expected props', () => {
  // When
  const expectedProps = { success: false };
  // Then
  checkProps(Congrats, expectedProps);
});
