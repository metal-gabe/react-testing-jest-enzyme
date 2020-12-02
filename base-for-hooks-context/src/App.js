/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages

// Context
import LanguageContext from "./contexts/languageContext";
import SuccessContext from "./contexts/successContext";

// Components
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import LanguagePicker from "./LanguagePicker";

// Assets
// Constants

// Utils / Methods
import hookActions from "./actions/hookActions";

// Styles

/* ========================================================================== */
// INTERNAL HELPERS, VARS & SET UP
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
		case "setLanguage":
			return { ...state, language: action.payload };
		default:
			throw new Error(`Invalid action type: ${action.type}`);
	}
};

/* ========================================================================== */
// DEFINING THE `MAIN APP` COMPONENT
/* ========================================================================== */
const App = function () {
	const [state, dispatch] = React.useReducer(reducer, {
		language: "en",
		secretWord: null,
	});

	const SET_LANGUAGE = "setLanguage";
	const SET_SECRET_WORD = "setSecretWord";
	const { secretWord } = state;

	const setSecretWord = (secretWord) =>
		dispatch({
			payload: secretWord,
			type: SET_SECRET_WORD,
		});

	const setLanguage = (language) =>
		dispatch({
			payload: language,
			type: SET_LANGUAGE,
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
			<h1>Jotto Bueller?</h1>
			<LanguageContext.Provider value={state.language}>
				<p>Lesson: Base for Hooks Context</p>
				<LanguagePicker setLanguage={setLanguage} />
				<SuccessContext.SuccessProvider>
					<Congrats />
					<Input secretWord={secretWord} />
				</SuccessContext.SuccessProvider>
				{/* <GuessedWords /> */}
			</LanguageContext.Provider>
		</div>
	);
};

/* ========================================================================== */
/* PROP TYPES DECLARATIONS */
/* ========================================================================== */
App.defaultProps = {};
App.propTypes = {};

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export default App;
