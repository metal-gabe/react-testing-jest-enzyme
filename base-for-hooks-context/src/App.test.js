/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import React from "react";

// Packages
import { mount } from "enzyme";

// Context

// Components
import App from "./App";

// Assets
// Constants

// Utils / Methods
import hookActions from "./actions/hookActions";
import { findByTestAttr } from "../test/testUtils";

// Styles

/* ========================================================================== */
// SETUP, UTILS, AND HELPER METHODS
/* ========================================================================== */
const mockGetSecretWord = jest.fn();

/**
 * Setup function for App component.
 * @param {string} secretWord - desired `secretWord` state value for the tests
 * @returns {ReactWrapper}
 */
const setup = (props = { secretWord: "party" }) => {
	const { secretWord } = props;
	mockGetSecretWord.mockClear();
	hookActions.getSecretWord = mockGetSecretWord;

	const mockUseReducer = jest.fn().mockReturnValue([
		{
			secretWord,
		},
		jest.fn(),
	]);

	React.useReducer = mockUseReducer;

	return mount(<App {...props} />);
};

/* ========================================================================== */
// START OF ALL UNIT TESTS FOR MAIN `APP` COMPONENT
/* ========================================================================== */
it("renders the `App` without error", () => {
	// GIVEN
	const wrapper = setup();

	// WHEN
	const component = findByTestAttr(wrapper, "component-app");

	// THEN
	expect(component.length).toBe(1);
});

describe("`getSecretWord` Calls", () => {
	it("should call `getSecretWord` on `App` mount", () => {
		// WHEN
		setup();

		// THEN
		expect(mockGetSecretWord).toHaveBeenCalled();
	});

	it("should not update `secretWord` on `App` update", () => {
		// GIVEN
		const wrapper = setup();
		mockGetSecretWord.mockClear();

		// WHEN
		wrapper.setProps();

		// THEN
		expect(mockGetSecretWord).not.toHaveBeenCalled();
	});
});

describe("when `secretWord` is NOT `null`", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup({ secretWord: "party" });
	});

	it("should render the `App` when `secretWord` is NOT `null`", () => {
		// GIVEN
		const appComponent = findByTestAttr(wrapper, "component-app");

		// THEN
		expect(appComponent.exists()).toBe(true);
	});

	it("should not render the loading spinner when `secretWord` is NOT `null`", () => {
		// GIVEN
		const spinnerComponent = findByTestAttr(wrapper, "spinner");

		// THEN
		expect(spinnerComponent.exists()).toBe(false);
	});
});

describe("when `secretWord` is `null`", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup({ secretWord: null });
	});

	it("should NOT render the `App` when `secretWord` is `null`", () => {
		// GIVEN
		const appComponent = findByTestAttr(wrapper, "component-app");

		// THEN
		expect(appComponent.exists()).toBe(false);
	});

	it("should render the loading spinner when `secretWord` is `null`", () => {
		// GIVEN
		const spinnerComponent = findByTestAttr(wrapper, "spinner");

		// THEN
		expect(spinnerComponent.exists()).toBe(true);
	});
});
