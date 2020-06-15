import { combineReducers } from 'redux';
// import UIReducer from './UIReducer'
import { LoginReducer } from './LoginReducer';
import { CoursesReducer } from './CoursesReducer';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) =>
	combineReducers({
		// ui: UIReducer,
		router: connectRouter(history),
		login: LoginReducer,
		courses: CoursesReducer,
	});

export default createRootReducer;