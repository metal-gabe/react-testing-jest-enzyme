/* ============================================================================================== */
// ALL REQUIRED IMPORTS
/* ============================================================================================== */
// React
import React from "react";

// Packages
import { shallow } from "enzyme";

// Context
import GuessedWordsContext from "./contexts/guessedWordsContext";

// Components
import GuessedWords from "./GuessedWords";

// Assets
// Constants

// Utils / Methods
import { findByTestAttr } from "../test/testUtils";

// Styles

/* ============================================================================================== */
// INTERNAL HELPERS, VARS & SET UP
/* ============================================================================================== */
const defaultProps = {
	guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {array} guessedWords - `guessedWords` value specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (guessedWords = []) => {
	const mockUseGuessedWords = jest.fn().mockReturnValue([guessedWords, jest.fn()]);
	GuessedWordsContext.useGuessedWords = mockUseGuessedWords;
	return shallow(<GuessedWords />);
};

/* ============================================================================================== */
// START OF ALL UNIT TESTS FOR `GUESSED WORDS` COMPONENT
/* ============================================================================================== */
describe("Testing if There Are No Words Guessed", () => {
	let wrapper;

	beforeEach(() => {
		// GIVEN
		wrapper = setup([]);
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

describe("Testing if There Are Words Guessed", () => {
	let wrapper;

	const guessedWords = [
		{ guessedWord: "train", letterMatchCount: 3 },
		{ guessedWord: "agile", letterMatchCount: 1 },
		{ guessedWord: "party", letterMatchCount: 5 },
	];

	beforeEach(() => {
		// GIVEN
		wrapper = setup(guessedWords);
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
		const wrapper = setup([]);
		// WHEN
		const guessInstructions = findByTestAttr(wrapper, "guess-instructions");
		// THEN
		expect(guessInstructions.text()).toBe("Try to guess the secret word!");
	});

	it("should correctly render the guess instructions string in Emoji", () => {
		// GIVEN
		const mockUseContext = jest.fn().mockReturnValue("emo");
		React.useContext = mockUseContext;
		const wrapper = setup([]);
		// WHEN
		const guessInstructions = findByTestAttr(wrapper, "guess-instructions");
		// THEN
		expect(guessInstructions.text()).toBe("🤔 🤫 🔤");
	});
});
