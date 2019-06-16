import authReducer from './authReducer';
import {combineReducers} from 'redux';
const rootReducer=combineReducers({
    AuthUser: authReducer
});
export default rootReducer;