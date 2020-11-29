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
// DEFINING THE `CONGRATS` COMPONENT
/* ========================================================================== */
/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = function (props) {
	return (
		<div className="alert alert-success" data-test="component-congrats">
			{props.success && (
				<span data-test="congrats-message">
					Congratulations! You guessed the word!
				</span>
			)}
		</div>
	);
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

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export default Congrats;
