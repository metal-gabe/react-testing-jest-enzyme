/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import { shallow } from "enzyme";

// Context

// Components
import Congrats from "./Congrats";

// Assets
// Constants

// Utils / Methods
import { checkProps, findByTestAttr } from "../test/testUtils";

// Styles

/* ========================================================================== */
// SETUP UTIL AND HELPER METHODS
/* ========================================================================== */
const defaultProps = { success: false };

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

/* ========================================================================== */
// START OF ALL UNIT TESTS FOR CONGRATS COMPONENT
/* ========================================================================== */
it("renders without error", () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-congrats");
	expect(component.length).toBe(1);
});

it("renders no text when `success` prop is false", () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, "component-congrats");
	expect(component.text()).toBe("");
});

it("renders non-empty congrats message when `success` prop is true", () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, "congrats-message");
	expect(message.text().length).not.toBe(0);
});

it("does not throw warning with expected props", () => {
	const expectedProps = { success: false };
	checkProps(Congrats, expectedProps);
});
