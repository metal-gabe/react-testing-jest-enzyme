import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without error', () => {
  // When
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="component-app"]');

  // Then
  expect(appComponent.length).toBe(1);
});
it('renders increment button', () => {
  // put stuff here
});
it('renders counter display', () => {
  // put stuff here
});
it('counter starts at 0', () => {
  // put stuff here
});
it('clicking button increments counter display', () => {
  // put stuff here
});
