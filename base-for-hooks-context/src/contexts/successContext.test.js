/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import { mount, shallow } from "enzyme";

// Context
import SuccessContext from "./successContext";

// Components
// Assets
// Constants
// Utils / Methods
// Styles

/* ========================================================================== */
// INTERNAL SET UP, UTILS, AND HELPER METHODS
/* ========================================================================== */
// A fake functional component that calls `useSuccess` for our tests
const FunctionalComponent = function () {
	SuccessContext.useSuccess();
	return <div />;
};

const setup = (props = {}) => {
	return shallow(<FunctionalComponent {...props} />);
};

/* ========================================================================== */
// START OF ALL UNIT TESTS FOR THE `SUCCESS CONTEXT` METHODS
/* ========================================================================== */
describe("Testing the SuccessContext and its Provider", () => {
	it("should throw an Error when `useSuccess` is not wrapped in a SuccessProvider", () => {
		// THEN
		expect(() => {
			shallow(<FunctionalComponent />);
		}).toThrow("useSuccess must be used within a SuccessProvider");
	});

	it("should NOT throw an Error when `useSuccess` is wrapped in a SuccessProvider", () => {
		// THEN
		expect(() => {
			mount(
				<SuccessContext.SuccessProvider>
					<FunctionalComponent />
				</SuccessContext.SuccessProvider>
			);
		}).not.toThrow("useSuccess must be used within a SuccessProvider");
	});
});
