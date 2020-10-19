/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React
import React, { Component } from "react";
import { connect } from "react-redux";

// Packages
// Context

// Components
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

// Assets
import logo from "./logo.svg";
// Constants

// Utils / Methods
import { getSecretWord } from "./actions";

// Styles
import "./App.css";

/* -------------------------------------------------------------------------- */
/* START OF MAIN APP COMPONENT */
/* -------------------------------------------------------------------------- */
export class UnconnectedApp extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	/**
	 * @method componentDidMount
	 * @returns {undefined}
	 */
	componentDidMount() {
		// get the secret word
		const { getSecretWord } = this.props;
		getSecretWord();
	}

	render() {
		const { guessedWords, success } = this.props;

		return (
			<div className="container">
				<header className="App-header">
					<h1 className="App-title">Jotto Game</h1>
					<img src={logo} className="App-logo" alt="logo" />
					<Congrats success={success} />
					<Input />
					<GuessedWords guessedWords={guessedWords} />
				</header>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { guessedWords, secretWord, success } = state;
	return { guessedWords, secretWord, success };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
