// ---------------------------------------------
// ALL IMPORTS
// ---------------------------------------------
// React
import React from "react";
import ReactDOM from "react-dom";

// Packages
import { shallow } from "enzyme";

// Context

// Components
import App, { UnconnectedApp } from "./App";

// Assets
// Constants

// Utils / Methods
import { storeFactory } from "../test/testUtils";

// Styles

/* ========================================================================== */
/* SETUP STUFF */
/* ========================================================================== */
/* ========================================================================== */
/* INITIAL SETUP STEPS */
/* ========================================================================== */
/**
 * @function setup
 * @param {object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (state = {}) => {
	const store = storeFactory(state);

	const wrapper = shallow(<App store={store} />)
		.dive()
		.dive();

	return wrapper;
};

/* ========================================================================== */
/* START OF UNIT TESTS FOR MAIN APP COMPONENT */
/* ========================================================================== */
describe("redux properties", () => {
	it("has access to `success` state", () => {
		// GIVEN
		const success = true;

		const wrapper = setup({
			success,
		});

		const { success: successProp } = wrapper.instance().props;

		// WHEN
		// THEN
		expect(successProp).toBe(success);
	});

	it("has access to `secretWord` state", () => {
		// GIVEN
		const secretWord = "party";

		const wrapper = setup({
			secretWord,
		});

		const { secretWord: secretWordProp } = wrapper.instance().props;

		// WHEN
		// THEN
		expect(secretWordProp).toBe(secretWord);
	});

	it("has access to `guessedWords` state", () => {
		// GIVEN
		const guessedWords = [
			{
				guessedWord: "train",
				letterMatchCount: 3,
			},
		];

		const wrapper = setup({
			guessedWords,
		});

		const { guessedWords: guessedWordsProp } = wrapper.instance().props;

		// WHEN
		// THEN
		expect(guessedWordsProp).toEqual(guessedWords);
	});

	it("`getSecretWord` action creator is a function on the props", () => {
		// GIVEN
		const wrapper = setup();
		const { getSecretWord: getSecretWordProp } = wrapper.instance().props;

		// WHEN
		// THEN
		expect(getSecretWordProp).toBeInstanceOf(Function);
	});
});

describe("initial App mount", () => {
	it("`getSecretWord` runs on App mount", () => {
		// GIVEN
		const getSecretWordMock = jest.fn();

		const testProps = {
			getSecretWord: getSecretWordMock,
			guessedWords: [
				{
					guessedWord: "train",
					letterMatchCount: 3,
				},
			],
			success: false,
		};
		// set up app component with `getSecretWordMock` as the `getSecretWord` prop
		const wrapper = shallow(<UnconnectedApp {...testProps} />);

		// WHEN
		// we run the lifecycle method
		wrapper.instance().componentDidMount();
		// and then check to see if our mock ran
		const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

		// THEN
		expect(getSecretWordCallCount).toBe(1);
	});
});
