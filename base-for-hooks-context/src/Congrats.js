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
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = function () {
	const [success] = SuccessContext.useSuccess();
	const language = React.useContext(LanguageContext);

	return (
		<div className="alert alert-success" data-test="component-congrats">
			{success && (
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
Congrats.propTypes = {};

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export default Congrats;
