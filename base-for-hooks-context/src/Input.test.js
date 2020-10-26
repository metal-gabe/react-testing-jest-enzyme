/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import { shallow } from "enzyme";

// Context

// Components
import Input from "./Input";

// Assets
// Constants

// Utils / Methods
import { findByTestAttr } from "./../test/testUtils";

// Styles

/* ========================================================================== */
// SETUP UTIL AND HELPER METHODS
/* ========================================================================== */
const setup = (props = {}) => {
	return shallow(<Input {...props} />);
};

/* ========================================================================== */
// START OF ALL UNIT TESTS FOR INPUT COMPONENT
/* ========================================================================== */
it("should render the `Input` component", () => {
	// GIVEN
	const wrapper = setup();

	// WHEN
	const component = findByTestAttr(wrapper, "component-input");

	// THEN
	expect(component.length).toBe(1);
});
