import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../icons/exam.png'
import '../style/nav.css';
import { connect } from 'react-redux'
class MainNAve extends Component{
    render(){
      const {Auth} = this.props;
      console.log(Auth.USERNAME+" "+Auth.TYPE);
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <img src={logo} alt="Logo" />
                <a className="brand" href="#">patient-history</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
      {!Auth.USERNAME&&  <li><button type="submit" className="btn btn-primary mb-2"><NavLink className="loginclass" to='./Login'>login</NavLink></button> </li> }
      {Auth.USERNAME&&   <li><button type="submit" className="btn btn-primary mb-2"><NavLink className="loginclass" to='./Login'>LogOut</NavLink></button> </li> }
      {Auth.USERNAME&&              <li><button type="submit" className="btn btn-primary mb-2"><NavLink className="loginclass" to='./Login'>{Auth.USERNAME}</NavLink></button> </li> }
      {Auth.TYPE==="pharmacy"&&         <li><button type="submit" className="btn btn-primary mb-2 numberofcomments" ><NavLink className="loginclass"  to="">3</NavLink> </button></li> } 
                </ul>      
               
        </div>
        </div>
      </nav>
   
  );
      
    }    
      
  }
 const mapStateToProps=(state)=>{
   return {
     Auth:state.AuthUser
   }
 } 
export default  connect( mapStateToProps)(MainNAve);
