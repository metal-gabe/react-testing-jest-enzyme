/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import PropTypes from "prop-types";

// Context
import LanguageContext from "./contexts/languageContext";

// Components
// Assets
// Constants

// Utils / Methods
import stringsModule from "./helpers/strings";

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
	const language = React.useContext(LanguageContext);

	return (
		<div className="alert alert-success" data-test="component-congrats">
			{props.success && (
				<span data-test="congrats-message">
					{stringsModule.getStringByLanguage(language, "congrats")}
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
