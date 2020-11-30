/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import { shallow } from "enzyme";

// Context

// Components
import GuessedWords from "./GuessedWords";

// Assets
// Constants

// Utils / Methods
import { checkProps, findByTestAttr } from "../test/testUtils";

// Styles

/* ========================================================================== */
// INTERNAL HELPERS, VARS & SET UP
/* ========================================================================== */
const defaultProps = {
	guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...setupProps} />);
};

/* ========================================================================== */
// START OF ALL UNIT TESTS FOR `GUESSED WORDS` COMPONENT
/* ========================================================================== */
describe("Testing general/basic functionality for `GuessedWords`", () => {
	it("does not throw warning with expected props", () => {
		// THEN
		checkProps(GuessedWords, defaultProps);
	});
});

describe("Testing If There Are No Words Guessed", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup({ guessedWords: [] });
	});

	it("renders without error", () => {
		// WHEN
		const component = findByTestAttr(wrapper, "component-guessed-words");

		// THEN
		expect(component.length).toBe(1);
	});

	it("renders instructions to guess a word", () => {
		// WHEN
		const instructions = findByTestAttr(wrapper, "guess-instructions");

		// THEN
		expect(instructions.text().length).not.toBe(0);
	});
});

describe("Testing If There Are Words Guessed", () => {
	let wrapper;

	const guessedWords = [
		{ guessedWord: "train", letterMatchCount: 3 },
		{ guessedWord: "agile", letterMatchCount: 1 },
		{ guessedWord: "party", letterMatchCount: 5 },
	];

	beforeEach(() => {
		wrapper = setup({ guessedWords });
	});

	it("renders without error", () => {
		// WHEN
		const component = findByTestAttr(wrapper, "component-guessed-words");

		// THEN
		expect(component.length).toBe(1);
	});

	it('renders "guessed words" section', () => {
		// WHEN
		const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");

		// THEN
		expect(guessedWordsNode.length).toBe(1);
	});

	it("correct number of guessed words", () => {
		// WHEN
		const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");

		// THEN
		expect(guessedWordNodes.length).toBe(guessedWords.length);
	});
});

describe("Testing the `LanguagePicker` Context", () => {
	it("should correctly render the guess instructions string in English, by default", () => {
		// GIVEN
		const wrapper = setup({ guessedWords: [] });

		// WHEN
		const guessInstructions = findByTestAttr(wrapper, "guess-instructions");

		// THEN
		expect(guessInstructions.text()).toBe("Try to guess the secret word!");
	});

	it("should correctly render the guess instructions string in Emoji", () => {
		// GIVEN
		const mockUseContext = jest.fn().mockReturnValue("emo");
		React.useContext = mockUseContext;
		const wrapper = setup({ guessedWords: [] });

		// WHEN
		const guessInstructions = findByTestAttr(wrapper, "guess-instructions");

		// THEN
		expect(guessInstructions.text()).toBe("🤔 🤫 🔤");
	});
});
