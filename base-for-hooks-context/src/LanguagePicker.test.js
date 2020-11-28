/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import { shallow } from "enzyme";

// Context

// Components
import LanguagePicker from "./LanguagePicker";

// Assets
// Constants

// Utils / Methods
import { checkProps, findByTestAttr } from "./../test/testUtils";

// Styles

/* ========================================================================== */
// INTERNAL SETUP, UTILS, AND HELPER METHODS
/* ========================================================================== */
const mockSetLanguage = jest.fn();

const setup = (props = { setLanguage: mockSetLanguage }) => {
	return shallow(<LanguagePicker {...props} />);
};

/* ========================================================================== */
// START OF TESTS FOR LANGUAGE PICKER COMPONENT
/* ========================================================================== */
describe("Testing the LanguagePicker component", () => {
	it("should render without error", () => {
		// GIVEN
		const wrapper = setup();

		// WHEN
		const component = findByTestAttr(wrapper, "component-language-picker");

		// THEN
		expect(component.exists()).toBe(true);
	});

	it("should not throw a warning with expected props", () => {
		// GIVEN
		checkProps(LanguagePicker, { setLanguage: jest.fn() })
		// WHEN// THEN
	});

	it("should render non-zero language icons", () => {
		// GIVEN// WHEN// THEN
	});

	it("should call the `setLanguage` prop upon click", () => {
		// GIVEN// WHEN// THEN
	});
});
