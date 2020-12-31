/* ============================================================================================== */
// ALL REQUIRED IMPORTS
/* ============================================================================================== */
// React
import React from "react";

// Packages
import { mount } from "enzyme";

// Context
import GuessedWordsContext from "./contexts/guessedWordsContext";
import SuccessContext from "./contexts/successContext";

// Components
import GuessedWords from "./GuessedWords";
import Input from "./Input";

// Assets
// Constants

// Utils / Methods
import { findByTestAttr } from "./../test/testUtils";

// Styles

/* ============================================================================================== */
// INTERNAL SET UP, UTILS, AND HELPER METHODS
/* ============================================================================================== */
const setup = (props = { guessedWordsStrings: [], secretWord: "party" }) => {
	const wrapper = mount(
		<GuessedWordsContext.GuessedWordsProvider>
			<SuccessContext.SuccessProvider>
				<Input {...props} />
			</SuccessContext.SuccessProvider>
		</GuessedWordsContext.GuessedWordsProvider>
	);

	const inputBox = findByTestAttr(wrapper, "input-box");
	const submitButton = findByTestAttr(wrapper, "submit-button");

	// pre-populating `guessedWords` context by simulating a word guess
	props.guessedWordsStrings.map((word) => {
		const mockEvent = { target: { value: word } };
		inputBox.simulate("change", mockEvent);
		submitButton.simulate("click");
	});

	return [wrapper, inputBox, submitButton];
};

/* ============================================================================================== */
// START OF ALL UNIT TESTS FOR `SIMULATING GUESSES` COMPONENT
/* ============================================================================================== */
describe("Simulating & testing word guesses", () => {
	let wrapper;
	let inputBox;
	let submitButton;

	beforeEach(() => {
		[wrapper, inputBox, submitButton] = setup({
			guessedWordsStrings: ["agile"],
			secretWord: "party",
		});
	});

	describe("When the `guessedWords` context is NOT empty", () => {
		describe("When the submitted guess is CORRECT", () => {
			beforeEach(() => {
				// GIVEN
				const mockEvent = { target: { value: "party" } };
				inputBox.simulate("change", mockEvent);
				submitButton.simulate("click");
			});

			it("should NOT render any children inside of the `Input` component", () => {
				// GIVEN
				const inputComponent = findByTestAttr(wrapper, "component-input");
				// THEN
				expect(inputComponent.children().length).toBe(0);
			});

			it("should show the same number of rows in `GuessedWords` as there were guesses made", () => {
				// GIVEN
				const guessedWordsTableRows = findByTestAttr(wrapper, "guessed-word");
				// THEN
				expect(guessedWordsTableRows.length).toBe(2);
			});
		});

		describe("when the submitted guess is INCORRECT", () => {
			beforeEach(() => {
				// GIVEN
				const mockEvent = { target: { value: "train" } };
				inputBox.simulate("change", mockEvent);
				submitButton.simulate("click");
			});

			it("should STILL render the `Input` component", () => {
				// THEN
				expect(inputBox.exists()).toBe(true);
			});

			it("should show the same number of rows in `GuessedWords` as there were guesses made", () => {
				// GIVEN
				const guessedWordsTableRows = findByTestAttr(wrapper, "guessed-word");
				// THEN
				expect(guessedWordsTableRows.length).toBe(2);
			});
		});
	});
});
