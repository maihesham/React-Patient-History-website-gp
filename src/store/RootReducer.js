import authReducer from './authReducer';
import searchPAtientReducer from './hosptalSearxhPAtient';
import searchPAtientforPharmcyReducer from './Pharmcyreducer';
import AddActions from './addActions';
import {combineReducers} from 'redux';
import { sessionReducer } from 'redux-react-session';
const rootReducer=combineReducers({
    AuthUser: authReducer,
    patientinfo:searchPAtientReducer,
    pharmcysearch:searchPAtientforPharmcyReducer,
    addaction:AddActions ,
    session: sessionReducer
});
export default rootReducer;