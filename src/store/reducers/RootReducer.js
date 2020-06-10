import { combineReducers } from 'redux';
// import UIReducer from './UIReducer'
import {LoginReducer} from './LoginReducer'

export default combineReducers({
    // ui: UIReducer,
    login: LoginReducer,
});
