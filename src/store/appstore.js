import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';

const middleware = [thunk];
const isProduction = process.env.NODE_ENV === 'production';
const composeEnhancers =
	typeof window === 'object' &&
	!isProduction &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		})
		: compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const AppStore = createStore(RootReducer, enhancer);

export default AppStore;