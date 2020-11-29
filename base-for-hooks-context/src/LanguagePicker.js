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
// LANGUAGE PICKER FUNCTIONAL COMPONENT
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
		<div data-test="component-language-picker">
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
LanguagePicker.propTypes = {
	setLanguage: PropTypes.func.isRequired,
};

export default LanguagePicker;
