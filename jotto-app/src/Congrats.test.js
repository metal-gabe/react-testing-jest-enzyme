// packages
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// context

// components
import Congrats from './Congrats';

// constants

// utils / methods
import { findByTestAttr } from '../test/testUtils';

// styles


Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

it ('renders without error', () => {
  // When


  // Then
})
it ('renders no text when "success" prop is false', () => {
  // When


  // Then
})
it ('renders non-empty congrats message when "success" prop is true', () => {
  // When


  // Then
})
