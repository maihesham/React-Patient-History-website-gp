import authReducer from './authReducer';
import searchPAtientReducer from './hosptalSearxhPAtient';
import searchPAtientforPharmcyReducer from './Pharmcyreducer';
import AddActions from './addActions';
import {combineReducers} from 'redux';
const rootReducer=combineReducers({
    AuthUser: authReducer,
    patientinfo:searchPAtientReducer,
    pharmcysearch:searchPAtientforPharmcyReducer,
    addaction:AddActions 
});
export default rootReducer;