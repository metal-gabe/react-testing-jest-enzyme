import stringsModule from "./strings";
const { getStringByLanguage } = stringsModule;

describe("Testing `stringsModule` language switching", () => {
	const fakeStrings = {
		emo: {
			congrats: "🎯🎉",
			guessColumnHeader: "🤷🏽‍♂️",
			guessInputPlaceholder: "⌨️ 🤔",
			guessPrompt: "🤔 🤫 🔤",
			guessedWords: "🤷🏽‍♂️ 🔤",
			matchingLettersColumnHeader: "✅",
			submit: "🚀",
		},
		en: {
			congrats: "Congratulations! You guessed the word!",
			guessColumnHeader: "Guessed Words",
			guessInputPlaceholder: "enter guess",
			guessPrompt: "Try to guess the secret word!",
			guessedWords: "Guesses",
			matchingLettersColumnHeader: "Matching Letters",
			submit: "Submit",
		},
		"merManPop!": {},
	};

	it("should return the correct `submit` string for English", () => {
		// GIVEN
		const string = getStringByLanguage("en", "submit", fakeStrings);

		// WHEN
		// THEN
		expect(string).toBe("Submit");
	});

	it("should return the correct `submit` string for Emoji", () => {
		// GIVEN
		const string = getStringByLanguage("emo", "submit", fakeStrings);

		// WHEN
		// THEN
		expect(string).toBe("🚀");
	});

	it("should return the English version for the `submit` string if a language doesn't exist", () => {
		// GIVEN
		const string = getStringByLanguage('notRealLanguage', 'submit', fakeStrings);

		// WHEN
		// THEN
		expect(string).toBe('Submit');
	});

	it("should return the English version for the `submit` string if the language exists but doesn't contain the `submit` string", () => {
		// GIVEN
		const string = getStringByLanguage('merManPop!', 'submit', fakeStrings);

		// WHEN
		// THEN
		expect(string).toBe('Submit');
	});
});
