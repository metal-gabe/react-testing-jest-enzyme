/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import { mount } from "enzyme";

// Context
import SuccessContext from "./contexts/successContext";

// Components
import Input from "./Input";

// Assets
// Constants

// Utils / Methods
import { findByTestAttr } from "./../test/testUtils";

// Styles

/* ========================================================================== */
// INTERNAL SET UP, UTILS, AND HELPER METHODS
/* ========================================================================== */
const setup = (props = { secretWord: "party" }) => {
	const wrapper = mount(
		<SuccessContext.SuccessProvider>
			<Input {...props} />
		</SuccessContext.SuccessProvider>
	);

	const inputBox = findByTestAttr(wrapper, "input-box");
	const submitButton = findByTestAttr(wrapper, "submit-button");

	return [wrapper, inputBox, submitButton];
};

/* ========================================================================== */
// START OF ALL UNIT TESTS FOR `SIMULATING GUESSES` COMPONENT
/* ========================================================================== */
describe("Simulating & testing word guesses", () => {
	let wrapper;
	let inputBox;
	let submitButton;

	beforeEach(() => {
		[wrapper, inputBox, submitButton] = setup();
	});

	describe("When the submitted guess is CORRECT", () => {
		beforeEach(() => {
			const mockEvent = { target: { value: "party" } };
			inputBox.simulate("change", mockEvent);
			submitButton.simulate("click");
		});

		it("should NOT render any children inside of the `Input` component", () => {
			// GIVEN
			const inputComponent = findByTestAttr(wrapper, "component-input");
			// WHEN
			// THEN
			expect(inputComponent.children().length).toBe(0);
		});
	});

	describe("when the submitted guess is INCORRECT", () => {
		beforeEach(() => {
			const mockEvent = { target: { value: "train" } };
			inputBox.simulate("change", mockEvent);
			submitButton.simulate("click");
		});

		it("should STILL render the `Input` component", () => {
			// GIVEN
			// WHEN
			// THEN
			expect(inputBox.exists()).toBe(true);
		});
	});
});
