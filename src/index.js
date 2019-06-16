import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import './index.css';
import App from './App';
import rootReducer from './store/RootReducer';
const store =createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}><App /></Provider>
,
 document.getElementById('root'));
