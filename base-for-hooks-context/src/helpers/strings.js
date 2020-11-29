/* ========================================================================== */
// INTERNAL HELPERS, VARS & SET UP
/* ========================================================================== */
const languageStrings = {
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
};

/* ========================================================================== */
// DEFINING THE `STRINGS MODULE` UTILS
/* ========================================================================== */
const getStringByLanguage = (
	languageCode,
	stringKey,
	strings = languageStrings
) => {
	if (
		!languageStrings[languageCode] ||
		!languageStrings[languageCode][stringKey]
	) {
		console.warn(
			`Could not get the string of ["${stringKey}"] for the language of ["${languageCode}"]`
		);

		// default to using the English version of the requested `stringKey`
		return languageStrings.en[stringKey];
	}

	return languageStrings[languageCode][stringKey];
};

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export default { getStringByLanguage };
