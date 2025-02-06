import { combineReducers } from 'redux';
import loginReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    auth: loginReducer,
    user: userReducer,
});

export default rootReducer;