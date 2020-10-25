/* ========================================================================== */
// ALL IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import PropTypes from "prop-types";

// Context
// Components
// Assets
// Constants
// Utils / Methods
// Styles

/* ========================================================================== */
// START OF FUNCTIONAL COMPONENT
/* ========================================================================== */
const GuessedWords = (props) => {
	const { guessedWords } = props;

	return (
		<div data-test="component-guessed-words">
			{Boolean(!guessedWords.length) && (
				<span data-test="guess-instructions">
					Try to guess the secret word!
				</span>
			)}
			{Boolean(guessedWords.length) && (
				<div data-test="guessed-words">
					<h3>Guessed Words (total: {guessedWords.length})</h3>
					<table className="table table-sm">
						<thead className="thead-light">
							<tr>
								<th>#</th>
								<th>Guess</th>
								<th>Matching Letters</th>
							</tr>
						</thead>
						<tbody>
							{guessedWords.map((word, idx) => {
								const { guessedWord, letterMatchCount } = word;

								return (
									<tr data-test="guessed-word" key={guessedWord}>
										<td>{idx+1}</td>
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

/* ========================================================================== */
// PROP TYPES DECLARATIONS
/* ========================================================================== */
GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default GuessedWords;
