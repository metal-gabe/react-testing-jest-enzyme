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
import { checkProps, findByTestAttr } from "./../test/testUtils";

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
describe("state controlled input field", () => {
	it("should render the `Input` component", () => {
		// GIVEN
		const wrapper = setup();

		// WHEN
		const component = findByTestAttr(wrapper, "component-input");

		// THEN
		expect(component.length).toBe(1);
	});

	it("should not throw an error with expected props", () => {
		// THEN
		checkProps(Input, {
			secretWord: "bueller",
		});
	});

	// it("should throw an error with unexpected props", () => {
	// 	// GIVEN
	// 	const wrapper = setup({
	// 		secretWord: ["bueller"],
	// 	});

	// 	// WHEN
	// 	const stuff = checkProps(wrapper, {
	// 		secretWord: "bueller",
	// 	});

	// 	// THEN
	// 	expect(stuff).toBeTruthy();
	// });

	it("should update state with the value from the input box upon change", () => {
		// GIVEN
		const wrapper = setup();
		const mockSetCurrentGuess = jest.fn();

		React.useState = jest.fn(() => {
			return ["", mockSetCurrentGuess];
		});

		// WHEN
		const inputBox = findByTestAttr(wrapper, "input-box");
		const mockEvent = {
			target: {
				value: "train",
			},
		};
		inputBox.simulate("change", mockEvent);

		// THEN
		expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
	});
});
