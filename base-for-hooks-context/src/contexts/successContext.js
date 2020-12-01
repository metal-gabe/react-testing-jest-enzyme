/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
// Context
// Components
// Assets
// Constants
// Utils / Methods
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, VARS & SET UP
/* ========================================================================== */
const SuccessContext = React.createContext();

/* ========================================================================== */
// DEFINING THE `SUCCESS CONTEXT` METHODS
/* ========================================================================== */
/**
 * @function useSuccess - Determines if the determined context is used within a SuccessProvider
 * @returns {array} - The `successContext` value will be a state of [value, setter]
 */
const useSuccess = function () {
	const context = React.useContext(SuccessContext);

	if (!context) {
		throw new Error("useSuccess must be used within a SuccessProvider");
	}

	return context;
};

/* ========================================================================== */
// DEFINING THE `SUCCESS PROVIDER` COMPONENT
/* ========================================================================== */
/**
 * @function SuccessProvider - m
 * @param {object} props - The props to pass through from the declared component
 * @returns {JSX.Element} - The final Provider component
 */
const SuccessProvider = function (props) {
	const [success, setSuccess] = React.useState(false);

	const value = React.useMemo(() => {
		return [success, setSuccess];
	}, [success]);

	return <SuccessContext.Provider value={value} {...props} />;
};

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export default { SuccessProvider, useSuccess };
