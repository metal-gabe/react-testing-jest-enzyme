/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
// Context

// Components
import "./App.css";
import Input from "./Input";

// Assets
// Constants

// Utils / Methods
import hookActions from "./actions/hookActions";

// Styles

/* ========================================================================== */
// INTERNAL HELPER METHODS
/* ========================================================================== */
/**
 * A reducer to update state; called automatically by `dispatch`
 * @param {object} state - existing state
 * @param {object} action - contains `type` and `payload` properties for the state
 * 								 e.g. { type: 'setSecretWord', payload: 'party' }
 * @return {object} - new state
 */
const reducer = (state, action) => {
	switch (action.type) {
		case "setSecretWord":
			return { ...state, secretWord: action.payload };
			break;
		default:
			throw new Error(`Invalid action type: ${action.type}`);
			break;
	}
};

/* ========================================================================== */
// MAIN `APP` COMPONENT: DEFINITION & EXPORT
/* ========================================================================== */
const App = function () {
	const [state, dispatch] = React.useReducer(reducer, {
		secretWord: null,
	});

	const SET_SECRET_WORD = "setSecretWord";
	const { secretWord } = state;

	const setSecretWord = (secretWord) =>
		dispatch({
			payload: secretWord,
			type: SET_SECRET_WORD,
		});

	React.useEffect(() => {
		hookActions.getSecretWord(setSecretWord);
	}, []);

	if (!secretWord) {
		return (
			<div className="container" data-test="spinner">
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
				<p>Loading the secret word...</p>
			</div>
		);
	}

	return (
		<div className="container app" data-test="component-app">
			<p>Lesson: Base for Hooks Context</p>
			<Input secretWord={secretWord} />
		</div>
	);
};

export default App;
