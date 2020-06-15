import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createRootReducer from './reducers/RootReducer';

const middleware = [thunk];
const isProduction = process.env.NODE_ENV === 'production';
export const history = createBrowserHistory();
const composeEnhancers =
	typeof window === 'object' &&
	!isProduction &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		})
		: compose;

const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history), ...middleware));

export default function  configureStore(preloadedState) {
	const AppStore = createStore(
		createRootReducer(history),
		preloadedState,
		enhancer
	);
	return AppStore;
}
