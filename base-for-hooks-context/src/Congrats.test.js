/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import { mount, shallow } from "enzyme";

// Context
import LanguageContext from "./contexts/languageContext";

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
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = ({ language = "en", success = false }) => {
	// language = language || 'en';
	// success = success || false;

	return mount(
		<LanguageContext.Provider value={language}>
			<Congrats success={success} />
		</LanguageContext.Provider>
	);
};

/* ========================================================================== */
// START OF ALL UNIT TESTS FOR `CONGRATS` COMPONENT
/* ========================================================================== */
describe("Testing the LanguagePicker component", () => {
	it("should correctly render the congrats string in English", () => {
		// GIVEN
		const wrapper = setup({ success: true });

		// THEN
		expect(wrapper.text()).toBe("Congratulations! You guessed the word!");
	});

	it("should correctly render the congrats string in Emoji", () => {
		// GIVEN
		const wrapper = setup({ language: 'emo', success: true });

		// THEN
		expect(wrapper.text()).toBe("🎯🎉");
	});

	it("should render without error", () => {
		// GIVEN
		const wrapper = setup({});

		// WHEN
		const component = findByTestAttr(wrapper, "component-congrats");

		// THEN
		expect(component.length).toBe(1);
	});

	it("shouldn't render any text when the `success` prop is false", () => {
		// GIVEN
		const wrapper = setup({ success: false });

		// WHEN
		const component = findByTestAttr(wrapper, "component-congrats");

		// THEN
		expect(component.text()).toBe("");
	});

	it("should render a non-empty congrats message when the `success` prop is true", () => {
		// GIVEN
		const wrapper = setup({ success: true });

		// WHEN
		const message = findByTestAttr(wrapper, "congrats-message");

		// THEN
		expect(message.text().length).not.toBe(0);
	});

	it("does not throw a warning when used with the expected props", () => {
		// WHEN
		const expectedProps = { success: false };

		// THEN
		checkProps(Congrats, expectedProps);
	});
});
