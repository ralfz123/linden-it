import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider, ReactReduxContext } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './store/appstore';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const store = configureStore(/* provide initial state if any */);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store} context={ReactReduxContext}>
			<App history={history} context={ReactReduxContext} />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
