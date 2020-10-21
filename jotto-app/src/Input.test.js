/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React
import React from "react";
import { shallow } from "enzyme";

// Packages
// Context

// Components
import Input, { UnconnectedInput } from "./Input";

// Assets
// Constants

// Utils / Methods
import { findByTestAttr, storeFactory } from "../test/testUtils";

// Styles

/* -------------------------------------------------------------------------- */
/* INITIAL SETUP STEPS */
/* -------------------------------------------------------------------------- */
/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Input store={store} />)
		.dive()
		.dive();
	return wrapper;
};

/* -------------------------------------------------------------------------- */
/* START OF UNIT TESTS FOR THE INPUT COMPONENT */
/* -------------------------------------------------------------------------- */
describe("render", () => {
	describe("word has not been guessed", () => {
		let wrapper;

		beforeEach(() => {
			const initialState = {
				success: false,
			};
			wrapper = setup(initialState);
		});

		it("renders the component without error", () => {
			// GIVEN
			const component = findByTestAttr(wrapper, "component-input");

			// WHEN
			// THEN
			expect(component.length).toBe(1);
		});

		it("renders the input box", () => {
			// GIVEN
			const inputBox = findByTestAttr(wrapper, "input-box");

			// WHEN
			// THEN
			expect(inputBox.length).toBe(1);
		});

		it("renders the submit button", () => {
			// GIVEN
			const submitButton = findByTestAttr(wrapper, "submit-button");

			// WHEN
			// THEN
			expect(submitButton.length).toBe(1);
		});
	});

	describe("word has been guessed", () => {
		let wrapper;

		beforeEach(() => {
			const initialState = {
				success: true,
			};
			wrapper = setup(initialState);
		});

		it("renders the component without error", () => {
			// GIVEN
			const component = findByTestAttr(wrapper, "component-input");

			// WHEN
			// THEN
			expect(component.length).toBe(1);
		});

		it("does NOT render the input box", () => {
			// GIVEN
			const inputBox = findByTestAttr(wrapper, "input-box");

			// WHEN
			// THEN
			expect(inputBox.length).toBe(0);
		});

		it("does NOT render the submit button", () => {
			// GIVEN
			const submitButton = findByTestAttr(wrapper, "submit-button");

			// WHEN
			// THEN
			expect(submitButton.length).toBe(0);
		});
	});
});

describe("redux props", () => {
	it("has success piece of state as prop", () => {
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

	it("`guessWord` action creator is a function prop`", () => {
		// GIVEN
		const wrapper = setup();
		const { guessWord: guessWordProp } = wrapper.instance().props;

		// WHEN
		// THEN
		expect(guessWordProp).toBeInstanceOf(Function);
	});
});

describe("`guessWord` action creator call", () => {
	it("calls `guessWord` when button is clicked", () => {
		// GIVEN
		const guessWordMock = jest.fn();

		const testProps = {
			guessWord: guessWordMock,
		};

		const wrapper = shallow(<UnconnectedInput {...testProps} />);
		const submitButton = findByTestAttr(wrapper, "submit-button");

		// WHEN
		submitButton.simulate("click");
		const guessWordCallCount = guessWordMock.mock.calls.length;

		// THEN
		expect(guessWordCallCount).toBe(1);
	});
});
