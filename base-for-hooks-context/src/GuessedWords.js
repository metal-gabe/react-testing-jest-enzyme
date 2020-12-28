/* ============================================================================================== */
// ALL REQUIRED IMPORTS
/* ============================================================================================== */
// React
import React from "react";

// Packages
import chalk from "chalk";
import PropTypes from "prop-types";

// Context
import GuessedWordsContext from "./contexts/guessedWordsContext";
import LanguageContext from "./contexts/languageContext";

// Components
// Assets
// Constants

// Utils / Methods
import stringsModule from "./helpers/strings";

// Styles

/* ============================================================================================== */
// INTERNAL HELPERS, VARS & SET UP
/* ============================================================================================== */
const logger = console.log;

/* ============================================================================================== */
// DEFINING THE `GUESSED WORDS` COMPONENT
/* ============================================================================================== */
const GuessedWords = function () {
	const [guessedWords] = GuessedWordsContext.useGuessedWords();
	const language = React.useContext(LanguageContext);

	return (
		<div data-test="component-guessed-words">
			{!guessedWords.length && (
				<span data-test="guess-instructions">
					{stringsModule.getStringByLanguage(language, "guessPrompt")}
				</span>
			)}
			{guessedWords.length && (
				<div data-test="guessed-words">
					<h3>{stringsModule.getStringByLanguage(language, "guessedWordsTitle")}</h3>
					<table className="table table-sm">
						<thead className="thead-light">
							<tr>
								<th>{stringsModule.getStringByLanguage(language, "guessColumnHeader")}</th>
								<th>
									{stringsModule.getStringByLanguage(
										language,
										"matchingLettersColumnHeader"
									)}
								</th>
							</tr>
						</thead>
						<tbody>
							{guessedWords.map((word, idx) => {
								const { guessedWord, letterMatchCount } = word;
								const styledGuess = chalk.bold.underline.whiteBright;

								logger("------------------------------------------------");
								logger(
									`${idx + 1}. One of your guesses was the word: ${styledGuess(
										guessedWord
									)}`
								);

								return (
									<tr data-test="guessed-word" key={idx}>
										<td>{guessedWord}</td>
										<td>{letterMatchCount}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

/* ============================================================================================== */
// ALL REQUIRED EXPORTS
/* ============================================================================================== */
export default GuessedWords;
