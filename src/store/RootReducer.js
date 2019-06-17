import authReducer from './authReducer';
import searchPAtientReducer from './hosptalSearxhPAtient';
import {combineReducers} from 'redux';
const rootReducer=combineReducers({
    AuthUser: authReducer,
    patientinfo:searchPAtientReducer
});
export default rootReducer;