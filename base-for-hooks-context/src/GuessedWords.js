/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import PropTypes from "prop-types";

// Context
import LanguageContext from "./contexts/languageContext";

// Components
// Assets
// Constants

// Utils / Methods
import stringsModule from "./helpers/strings";

// Styles

/* ========================================================================== */
// DEFINING THE `GUESSED WORDS` COMPONENT
/* ========================================================================== */
const GuessedWords = function (props) {
	const language = React.useContext(LanguageContext);
	let contents;

	if (props.guessedWords.length === 0) {
		contents = (
			<span data-test="guess-instructions">
				{stringsModule.getStringByLanguage(language, "guessPrompt")}
			</span>
		);
	} else {
		const guessedWordsRows = props.guessedWords.map((word, index) => (
			<tr data-test="guessed-word" key={index}>
				<td>{word.guessedWord}</td>
				<td>{word.letterMatchCount}</td>
			</tr>
		));
		contents = (
			<div data-test="guessed-words">
				<h3>
					{stringsModule.getStringByLanguage(
						language,
						"guessedWordsTitle"
					)}
				</h3>
				<table className="table table-sm">
					<thead className="thead-light">
						<tr>
							<th>{stringsModule.getStringByLanguage(language, "guessColumnHeader")}</th>
							<th>{stringsModule.getStringByLanguage(language, "matchingLettersColumnHeader")}</th>
						</tr>
					</thead>
					<tbody>{guessedWordsRows}</tbody>
				</table>
			</div>
		);
	}

	return <div data-test="component-guessed-words">{contents}</div>;
};

/* ========================================================================== */
// PROP TYPES DECLARATIONS & DEFAULT EXPORT
/* ========================================================================== */
GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired,
		})
	).isRequired,
};

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export default GuessedWords;
