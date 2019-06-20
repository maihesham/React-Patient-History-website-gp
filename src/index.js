import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { sessionService } from 'redux-react-session';
import './index.css';
import App from './App';
import rootReducer from './store/RootReducer';
const store =createStore(rootReducer,applyMiddleware(thunk));
const validateSession = (session) => {
    // check if your session is still valid with a server check, through axios for instance
  //  return api.invokeRemoteSessionValidationThroughAxios(session).then(response => response.isSessionValid);
  }
const options = { refreshOnCheckAuth: true, redirectPath: '/userhomepage', driver: 'COOKIES', validateSession };
sessionService.initSessionService(store, options)
ReactDOM.render(
    <Provider store={store}><App /></Provider>
,
 document.getElementById('root'));
