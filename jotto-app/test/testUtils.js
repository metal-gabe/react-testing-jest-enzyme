// ---------------------------------------------
// ALL IMPORTS
// ---------------------------------------------
// React
import { createStore } from 'redux';

// Packages
import checkPropTypes from 'check-prop-types';

// Context

// Components
import rootReducer from '../src/reducers';

// Assets
// Constants
// Utils / Methods
// Styles

/* -------------------------------------------------------------------------- */
/* START OF CUSTOM TEST UTILS / HELPER METHODS */
/* -------------------------------------------------------------------------- */
/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer.
 * @param {object} initialState - Initial state for the store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

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
    component.name,
  );

  expect(propError).toBeUndefined();
};
