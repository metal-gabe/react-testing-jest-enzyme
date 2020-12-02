/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import { mount, shallow } from "enzyme";

// Context
import GuessedWordsContext from "./guessedWordsContext";

// Components
// Assets
// Constants
// Utils / Methods
// Styles

/* ========================================================================== */
// INTERNAL SET UP, UTILS, AND HELPER METHODS
/* ========================================================================== */
// A fake functional component that calls `useGuessedWords` for our tests
const FunctionalComponent = function () {
	GuessedWordsContext.useGuessedWords();
	return <div />;
};

const setup = (props = {}) => {
	return shallow(<FunctionalComponent {...props} />);
};

/* ========================================================================== */
// START OF ALL UNIT TESTS FOR THE `GUESSED WORDS CONTEXT` METHODS
/* ========================================================================== */
describe("Testing the GuessedWordsContext and its Provider", () => {
	it("should throw an Error when `useGuessedWords` is not wrapped in a GuessedWordsProvider", () => {
		// THEN
		expect(() => {
			shallow(<FunctionalComponent />);
		}).toThrow("useGuessedWords must be used within a GuessedWordsProvider");
	});

	it("should NOT throw an Error when `useGuessedWords` is wrapped in a GuessedWordsProvider", () => {
		// THEN
		expect(() => {
			mount(
				<GuessedWordsContext.GuessedWordsProvider>
					<FunctionalComponent />
				</GuessedWordsContext.GuessedWordsProvider>
			);
		}).not.toThrow("useGuessedWords must be used within a GuessedWordsProvider");
	});
});
