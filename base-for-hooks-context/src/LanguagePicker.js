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
// DEFINING THE `LANGUAGE PICKER` COMPONENT
/* ========================================================================== */
const LanguagePicker = function ({ setLanguage }) {
	const languages = [
		{
			code: "en",
			symbol: "🇺🇸",
		},
		{
			code: "emo",
			symbol: "😊",
		},
	];

	return (
		<div className="language-picker-container" data-test="component-language-picker">
			{languages.map((language) => {
				return (
					<span
						data-test="language-icon"
						key={language.code}
						onClick={() => setLanguage(language.code)}
					>
						{language.symbol}
					</span>
				);
			})}
		</div>
	);
};

/* ========================================================================== */
/* PROP TYPES DECLARATIONS */
/* ========================================================================== */
LanguagePicker.defaultProps = {
	setLanguage: () => {},
};

LanguagePicker.propTypes = {
	setLanguage: PropTypes.func.isRequired,
};

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export default LanguagePicker;
