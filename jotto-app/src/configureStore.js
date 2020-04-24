/* -------------------------------------------------------------------------- */
/**/
/* -------------------------------------------------------------------------- */
// React

// Packages
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

// Context
// Components
// Assets
// Constants

// Utils / Methods
import rootReducer from './reducers';

// Styles

export const middleware = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore,
);

export default createStoreWithMiddleware(rootReducer);
