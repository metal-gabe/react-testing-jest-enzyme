/* ========================================================================== */
/* ALL IMPORTS */
/* ========================================================================== */
// React
import React, { Component } from "react";
import { connect } from "react-redux";

// Packages
// Context
// Components
// Assets
// Constants

// Utils / Methods
import { guessWord } from "./actions";

// Styles

/* ========================================================================== */
/* START OF CUSTOM INPUT COMPONENT */
/* ========================================================================== */
export class UnconnectedInput extends Component {
	/**
	 * @method constructor
	 * @param {object} props - Component props
	 * @returns {undefined}
	 */
	constructor(props) {
		super(props);

		this.state = {
			currentGuess: "",
		};

		[
			// prettier-ignore
			'submitGuessedWord',
		].forEach((m) => {
			this[m] = this[m].bind(this);
		});
	}

	render() {
		const { success } = this.props;
		const { currentGuess } = this.state;

		return (
			<div className="bueller" data-test="component-input">
				{!success && (
					<form action="" className="form-inline">
						<input
							className="mb-2 mx-sm-3"
							data-test="input-box"
							id="word-guess"
							name=""
							onChange={(e) => {
								this.setState({
									currentGuess: e.target.value,
								});
							}}
							onClick={() => {}}
							placeholder="Enter Your Guess"
							type="text"
							value={currentGuess}
						/>
						<button
							className="btn btn-primary mb-2"
							data-test="submit-button"
							onClick={(e) => this.submitGuessedWord(e)}
							type="submit"
						>
							Hit Me!
						</button>
					</form>
				)}
			</div>
		);
	}

	submitGuessedWord(event) {
		event.preventDefault();
		const { guessWord } = this.props;
		const { currentGuess } = this.state;
		const currentGuessIsValid =
			currentGuess && currentGuess.length > 0 && currentGuess.length < 6;

		if (!currentGuessIsValid) {
			window.alert("Please enter a guess that is 1-5 characters long.");
		}

		if (currentGuessIsValid) {
			guessWord(currentGuess);
		}

		this.setState({
			currentGuess: "",
		});
	}
}

const mapStateToProps = ({ success }) => {
	return {
		success,
	};
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
