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
// DEFINITION OF CONGRATS COMPONENT
/* ========================================================================== */
/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = (props) => {
	if (props.success) {
		return (
			<div data-test="component-congrats" className="alert alert-success">
				<span data-test="congrats-message">
					Congratulations! You guessed the word!
				</span>
			</div>
		);
	} else {
		return <div data-test="component-congrats" />;
	}
};

/* ========================================================================== */
/* PROP TYPES DECLARATIONS & DEFAULT EXPORT */
/* ========================================================================== */
Congrats.propTypes = {
	success: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ success }) => {
	return { success };
};

export default Congrats;
