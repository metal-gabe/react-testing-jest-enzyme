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

const getStringByLanguage = (
	languageCode,
	stringKey,
	strings = languageStrings
) => {};

export default { getStringByLanguage };
