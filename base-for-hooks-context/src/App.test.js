/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import { mount } from "enzyme";

// Context

// Components
import App from "./App";

// Assets
// Constants

// Utils / Methods
import hookActions from "./actions/hookActions";
import { findByTestAttr } from "../test/testUtils";

// Styles

/* ========================================================================== */
// SETUP, UTILS, AND HELPER METHODS
/* ========================================================================== */
const mockGetSecretWord = jest.fn();

/**
 * Setup function for App component.
 * @returns {ReactWrapper}
 */
const setup = (props = {}) => {
	mockGetSecretWord.mockClear();
	hookActions.getSecretWord = mockGetSecretWord;
	return mount(<App {...props} />);
};

/* ========================================================================== */
// START OF ALL UNIT TESTS FOR MAIN APP COMPONENT
/* ========================================================================== */
it("App renders without error", () => {
	// GIVEN
	const wrapper = setup();

	// WHEN
	const component = findByTestAttr(wrapper, "component-app");

	// THEN
	expect(component.length).toBe(1);
});

describe("`getSecretWord` Calls", () => {
	it("should call `getSecretWord` on `App` mount", () => {
		// GIVEN
		// WHEN
		setup();

		// THEN
		expect(mockGetSecretWord).toHaveBeenCalled();
	});
});
