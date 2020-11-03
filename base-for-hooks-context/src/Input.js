/* ========================================================================== */
// ALL REQUIRED IMPORTS
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
// DEFINITION OF INPUT COMPONENT
/* ========================================================================== */
const Input = function ({ secretWord }) {
	const [currentGuess, setCurrentGuess] = React.useState("");

	return (
		<div data-test="component-input">
			<form action="" className="form-inline" method="get" name="">
				<input
					className="mb-2 mx-sm-3"
					data-test="input-box"
					name=""
					onChange={(event) => {
						setCurrentGuess(event.target.value);
					}}
					placeholder="Bueller?"
					type="text"
					value={currentGuess}
				/>
				<button
					className=""
					data-test="submit-button"
					onClick={(event) => event.preventDefault()}
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

/* ========================================================================== */
/* PROP TYPES DECLARATIONS & DEFAULT EXPORT */
/* ========================================================================== */
Input.defaultProps = {
	secretWord: "",
};

Input.propTypes = {
	secretWord: PropTypes.string.isRequired,
};

export default Input;
