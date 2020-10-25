// -----------------------------------------------------------------------------
// ALL IMPORTS
// -----------------------------------------------------------------------------
// Packages
import React from "react";
import PropTypes from "prop-types";

// Context
// Components
// Assets
// Constants
// Utils / Methods
// Styles

// -----------------------------------------------------------------------------
// START OF FUNCTIONAL COMPONENT
// -----------------------------------------------------------------------------
/**
 * Functional React component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if "success" prop is false)
 */

const Congrats = function (props) {
	const { success } = props;

	if (success) {
		return (
			<div className="alert alert-success" data-test="component-congrats">
				<span data-test="congrats-message">
					Congrats! You guessed the word!
				</span>
				<button onClick={() => window.location.reload()} type="reset">
					New Word
				</button>
			</div>
		);
	}

	return <div data-test="component-congrats" />;
};

// -----------------------------------------------------------------------------
// PROP TYPES DECLARATIONS
// -----------------------------------------------------------------------------
Congrats.propTypes = {
	success: PropTypes.bool.isRequired,
};

export default Congrats;
