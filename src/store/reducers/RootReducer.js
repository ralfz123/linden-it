import { combineReducers } from 'redux';
// import UIReducer from './UIReducer'
import { LoginReducer } from './LoginReducer';
import { CoursesReducer } from './CoursesReducer';



export default combineReducers({
	// ui: UIReducer,
	login: LoginReducer,
	courses: CoursesReducer,
});

