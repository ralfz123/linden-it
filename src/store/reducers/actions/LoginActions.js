import ValidationController from './ValidationController';
// import SessionController from '../../../controllers/SessionController';
// import SentryDispatcher from '../../../utils/SentryDispatcher';
// import { toast } from 'react-toastify';
// import CookieController from '../../../controllers/CookieController';

function setAuthenticated(value) {
	return {
		type: 'LOGIN::SET_AUTHENTICATED',
		value,
	};
}

function setLoading(value) {
	return {
		type: 'LOGIN::SET_LOADING',
		value,
	};
}

function setError(value) {
	return {
		type: 'LOGIN::SET_ERROR',
		value,
	};
}


export const ValidateLogin = (email, password) => dispatch => {
	dispatch(setLoading(true));
	const loginIsValid = ValidationController.validateLoginWithCredentials(email, password);
	if (loginIsValid) {
		dispatch(setAuthenticated(true));
		dispatch(setError(false));
	} else {
		dispatch(setAuthenticated(false));
		dispatch(setError(true));
	}
	// FAKE WACHTTIJD VOOR INLOGGEN
	setTimeout(() => { dispatch(setLoading(false));}, 2000);
};
