import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../icons/exam.png'
import '../style/nav.css';
import { connect } from 'react-redux';
import {LogOUTTOREDX} from '../Actions/useraction';
class MainNAve extends Component{
    render(){
      const {Auth} = this.props;
      console.log(Auth.USERNAME+" "+Auth.TYPE);
        console.log(sessionStorage.getItem('username'));
      
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <img src={logo} alt="Logo" />
                <a className="brand" href="#">patient-history</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
                {!Auth.USERNAME&&<li><button  className="btn btn-primary mb-2"><NavLink className="loginclass" to='./Login'>login</NavLink></button> </li> }
                {Auth.USERNAME&&<li><button  className="btn btn-primary mb-2" onClick={this.props.LogOUTTOREDX}><NavLink className="loginclass" to='./Logout'>logout</NavLink></button> </li> }
                {Auth.USERNAME&&<li><button className="btn btn-primary mb-2" >{Auth.USERNAME}</button> </li> }
                {Auth.USERNAME&&<li><button className="btn btn-primary mb-2" >{Auth.TYPE}</button> </li> }
               <li><button className="btn btn-primary mb-2 numberofcomments" >{ new Date().toLocaleTimeString() } </button></li> 
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
  const mapDispatchToProps=(dispatch)=>{
    return {
     LogOUTTOREDX:()=>dispatch(LogOUTTOREDX())
    }
  } 
 
export default  connect( mapStateToProps,mapDispatchToProps)(MainNAve);