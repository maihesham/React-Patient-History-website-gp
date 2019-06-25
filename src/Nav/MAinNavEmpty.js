import React ,{Component} from 'react';
import logo from '../icons/exam.png'
import '../style/nav.css';
class MainNAveEmpty extends Component{
    render(){
     
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <img src={logo} alt="Logo" />
                <a className="brand">patient-history</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
        </ul>      
               
        </div>
        </div>
      </nav>
   
  );
      
    }    
      
  }
 export default MainNAveEmpty;
