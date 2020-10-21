/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React
import { applyMiddleware, createStore } from "redux";

// Packages
import checkPropTypes from "check-prop-types";

// Context

// Components
// Assets
// Constants

// Utils / Methods
import { middleware } from "../src/configureStore";
import rootReducer from "../src/reducers";

// Styles

/* -------------------------------------------------------------------------- */
/* START OF CUSTOM TEST UTILS / HELPER METHODS */
/* -------------------------------------------------------------------------- */
/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middleware.
 * @param {object} initialState - Initial state for the store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middleware)(
		createStore
	);
	return createStoreWithMiddleware(rootReducer, initialState);
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
		"prop",
		component.name
	);

	expect(propError).toBeUndefined();
};
