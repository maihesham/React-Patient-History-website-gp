import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../icons/exam.png'
import '../style/nav.css';
const MainNAve=() =>{
          return (
           
                      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <div className="container">
                              <img src={logo} alt="Logo" />
                              <a className="brand" href="/">patient-history</a>
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav mr-auto">
                              </ul>      
                              <button type="submit" className="btn btn-primary mb-2"><NavLink className="loginclass" to='./Login'>login</NavLink>
                                        </button>
                             
                      </div>
                      </div>
                    </nav>
        
  );
      
  }
export default  MainNAve;
