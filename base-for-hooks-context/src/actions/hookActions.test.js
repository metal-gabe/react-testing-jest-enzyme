/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React

// Packages
import moxios from "moxios";

// Context
// Components
// Assets
// Constants

// Utils / Methods
import { getSecretWord } from "./hookActions";

// Styles

/* ========================================================================== */
// START OF ALL UNIT TESTS FOR THE HOOK ACTIONS
/* ========================================================================== */
describe("Moxios Tests", () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it("should call the `getSecretWord` callback on an Axios response", async () => {
		// GIVEN
		const secretWord = "party";

		// WHEN
		moxios.wait(() => {
			const request = moxios.request.mostRecent();

			request.respondWith({
				response: secretWord,
				status: 200,
			});
		});

		const mockSetSecretWord = jest.fn();
		await getSecretWord(mockSetSecretWord);

		// THEN
		expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
	});
});
