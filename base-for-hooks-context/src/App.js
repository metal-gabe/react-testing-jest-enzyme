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
	const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

	const setSecretWord = (secretWord) =>
		dispatch({
			payload: secretWord,
			type: "setSecretWord",
		});

	React.useEffect(() => {
		hookActions.getSecretWord(setSecretWord);
	}, []);

	return (
		<div className="app" data-test="component-app">
			<p>Lesson: Base for Hooks Context</p>
			<Input />
		</div>
	);
};

export default App;
