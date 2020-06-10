import ValidationController from './controllers/ValidationController';
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


export const ValidateLogin = (email, password) => dispatch => {
    dispatch(setLoading(true));
    const loginIsValid = ValidationController.validateLoginWithCredentials(email, password);
    if (loginIsValid) {
        dispatch(setAuthenticated(true))
    } else {
        dispatch(setAuthenticated(false))
    }   
};s
