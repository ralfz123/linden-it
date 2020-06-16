import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import AppStore from './store/appstore';
import App from './App';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const store = AppStore;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store} >
			<App/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.register();
