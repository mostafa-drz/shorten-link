import { combineReducers } from 'redux';
import authReducer from './auth';
import linkReducer from './link';

export default combineReducers({
    auth: authReducer,
    links: linkReducer
});