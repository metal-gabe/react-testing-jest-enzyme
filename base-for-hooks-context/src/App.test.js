/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import { shallow } from "enzyme";

// Context

// Components
import App from "./App";

// Assets
// Constants

// Utils / Methods
import { findByTestAttr } from "../test/testUtils";

// Styles

/* ========================================================================== */
// SETUP UTIL AND HELPER METHODS
/* ========================================================================== */
/**
 * Setup function for App component.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
	return shallow(<App {...props} />);
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
