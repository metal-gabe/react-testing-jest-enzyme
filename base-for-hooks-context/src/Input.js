/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import PropTypes from 'prop-types';

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
	return (
		<div data-test="component-input">I am the `Input`, coo-coo-ka-choo!</div>
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
