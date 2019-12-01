// ---------------------------------------------
// ALL IMPORTS
// ---------------------------------------------
// packages
import checkPropTypes from 'check-prop-types';

// context

// components

// assets

// constants

// utils / methods

// styles

/**
 * Return node(s) with the given data-test attributes.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );

  expect(propError).toBeUndefined();
};
