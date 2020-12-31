/* ============================================================================================== */
// ALL REQUIRED IMPORTS
/* ============================================================================================== */
// React
import React from "react";

// Packages
// Context
// Components
// Assets
// Constants
// Utils / Methods
// Styles

/* ============================================================================================== */
// INTERNAL HELPERS, VARS & SET UP
/* ============================================================================================== */
const GuessedWordsContext = React.createContext();

/* ============================================================================================== */
// DEFINING THE `GUESSED WORDS CONTEXT` METHODS
/* ============================================================================================== */
/**
 * @function useGuessedWords - Determines if the determined context is used within a GuessedWordsProvider
 * @returns {array} - The `GuessedWordsContext` value will be a state of [value, setter]
 */
const useGuessedWords = function () {
	const context = React.useContext(GuessedWordsContext);

	if (!context) {
		throw new Error("`useGuessedWords` must be used within a GuessedWordsProvider");
	}

	return context;
};

/* ============================================================================================== */
// DEFINING THE `GUESSED WORDS PROVIDER` COMPONENT
/* ============================================================================================== */
/**
 * @function GuessedWordsProvider - m
 * @param {object} props - The props to pass through from the declared component
 * @returns {JSX.Element} - The final Provider component
 */
const GuessedWordsProvider = function (props) {
	const [guessedWords, setGuessedWords] = React.useState([]);

	const value = React.useMemo(() => {
		return [guessedWords, setGuessedWords];
	}, [guessedWords]);

	return <GuessedWordsContext.Provider value={value} {...props} />;
};

/* ============================================================================================== */
// ALL REQUIRED EXPORTS
/* ============================================================================================== */
export default { GuessedWordsProvider, useGuessedWords };
