/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React

// Packages
import axios from "axios";

// Context
// Components
// Assets
// Constants
// Utils / Methods
// Styles

/* ========================================================================== */
// START OF ALL HOOK ACTIONS DEFINITIONS
/* ========================================================================== */
export const getSecretWord = async (setSecretWord) => {
	const response = await axios.get('http://localhost:3030');

	setSecretWord(response.data);
};

export default {
	getSecretWord,
};
