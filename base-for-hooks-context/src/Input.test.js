/* ============================================================================================== */
// ALL REQUIRED IMPORTS
/* ============================================================================================== */
// React
import React from "react";

// Packages
import { mount } from "enzyme";

// Context
import GuessedWordsContext from "./contexts/guessedWordsContext";
import LanguageContext from "./contexts/languageContext";
import SuccessContext from "./contexts/successContext";

// Components
import Input from "./Input";

// Assets
// Constants

// Utils / Methods
import { checkProps, findByTestAttr } from "./../test/testUtils";

// Styles

/* ============================================================================================== */
// SETUP UTIL AND HELPER METHODS
/* ============================================================================================== */
/**
 * Create ReactWrapper for Input component for testing
 * @param {object} testValues - Context and props values for this specific test.
 * @returns {ReactWrapper} - Wrapper for Input component and providers.
 */
const setup = (props) => {
	const { language = "en", secretWord = "party", success = false } = props;
	const setSuccessMock = jest.fn();

	return mount(
		<LanguageContext.Provider value={language}>
			<SuccessContext.SuccessProvider value={[success, setSuccessMock]}>
				<GuessedWordsContext.GuessedWordsProvider>
					<Input secretWord={secretWord} />
				</GuessedWordsContext.GuessedWordsProvider>
			</SuccessContext.SuccessProvider>
		</LanguageContext.Provider>
	);
};

/* ============================================================================================== */
// START OF ALL UNIT TESTS FOR `INPUT` COMPONENT
/* ============================================================================================== */
describe("State Controlled `Input` Field", () => {
	const mockSetCurrentGuess = jest.fn();
	let wrapper;

	beforeEach(() => {
		// GIVEN
		mockSetCurrentGuess.mockClear();

		React.useState = jest.fn(() => {
			return ["", mockSetCurrentGuess];
		});

		wrapper = setup({});
	});

	describe("Testing general/basic functionality", () => {
		it("should render the `Input` component", () => {
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

		it("should update state with the value from the `Input` box upon change", () => {
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

		it("should clear the `Input` field when the submit button is clicked", () => {
			// WHEN
			const submitButton = findByTestAttr(wrapper, "submit-button");
			submitButton.simulate("click", { preventDefault() {} });
			// THEN
			expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
		});
	});

	describe("Testing the `LanguagePicker` context", () => {
		it("should correctly render the submit string in English", () => {
			// GIVEN
			const wrapper = setup({ language: "en" });
			// WHEN
			const submitButton = findByTestAttr(wrapper, "submit-button");
			// THEN
			expect(submitButton.text()).toBe("Submit");
		});

		it("should correctly render the submit string in Emoji", () => {
			// GIVEN
			const wrapper = setup({ language: "emo" });
			// WHEN
			const submitButton = findByTestAttr(wrapper, "submit-button");
			// THEN
			expect(submitButton.text()).toBe("🚀");
		});
	});

	describe("Testing the `SuccessContext` provider", () => {
		it("should not render the `Input` component when `success` is `true`", () => {
			// GIVEN
			const wrapper = setup({ secret: "party", success: true });
			// THEN
			expect(wrapper.isEmptyRender()).toBe(true);
		});
	});
});
