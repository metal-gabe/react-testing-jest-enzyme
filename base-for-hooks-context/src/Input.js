/* ============================================================================================== */
// ALL REQUIRED IMPORTS
/* ============================================================================================== */
// React
import React from "react";

// Packages
import PropTypes from "prop-types";

// Context
import GuessedWordsContext from "./contexts/guessedWordsContext";
import LanguageContext from "./contexts/languageContext";
import SuccessContext from "./contexts/successContext";

// Components
// Assets
// Constants

// Utils / Methods

import stringsModule from "./helpers/strings";
import { getLetterMatchCount } from "./helpers";

// Styles

/* ============================================================================================== */
// DEFINING THE `INPUT` COMPONENT
/* ============================================================================================== */
const Input = function ({ secretWord }) {
	const language = React.useContext(LanguageContext);
	const [success, setSuccess] = SuccessContext.useSuccess();
	const [guessedWords, setGuessedWords] = GuessedWordsContext.useGuessedWords();
   // console.log('--BLLR? ---------------------------------------------------------------------------');
   // console.log('--BLLR? -> file: Input.js -> line 33 -> Input -> guessedWords ->', guessedWords);
   // console.log('--BLLR? ---------------------------------------------------------------------------');
	const [currentGuess, setCurrentGuess] = React.useState("");

	if (success) {
		return null;
	}

	return (
		<div data-test="component-input">
			<form action="" className="form-inline" method="get" name="">
				<input
					className="mb-2 mx-sm-3"
					data-test="input-box"
					name=""
					onChange={(event) => {
						const { value } = event.target;
						setCurrentGuess(value);
					}}
					placeholder={stringsModule.getStringByLanguage(language, "guessInputPlaceholder")}
					type="text"
					value={currentGuess}
				/>
				<button
					className=""
					data-test="submit-button"
					onClick={(event) => {
						event.preventDefault();
						//update `guessedWords`
						const letterMatchCount = getLetterMatchCount(currentGuess, secretWord);

						const newGuessedWords = [
							...guessedWords,
							{ guessedWord: currentGuess, letterMatchCount },
						];

						setGuessedWords(newGuessedWords);

						// check against `secretWord` and update "success" if needed
						if (currentGuess === secretWord) {
							setSuccess(true);
						}

						// clearing the input box
						setCurrentGuess("");
					}}
					type="submit"
				>
					{stringsModule.getStringByLanguage(language, "submit")}
				</button>
			</form>
		</div>
	);
};

/* ============================================================================================== */
/* PROP TYPES DECLARATIONS */
/* ============================================================================================== */
Input.defaultProps = {
	secretWord: "",
};

Input.propTypes = {
	secretWord: PropTypes.string.isRequired,
};

/* ============================================================================================== */
// ALL REQUIRED EXPORTS
/* ============================================================================================== */
export default Input;
