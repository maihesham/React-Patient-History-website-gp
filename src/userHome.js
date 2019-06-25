import React ,{Component} from 'react';
import AdminProfile from './Users/profile';
import LabProfile from './Users/Lab';
import HospitalProfile from './Users/Hospitla';
import PharmcyProfile from './Users/pharmacy';
import MainNav from './Nav/MainNav';
import { connect } from 'react-redux';
import {LogOUTTOREDX} from './Actions/useraction';
class userHome extends Component{
    render(){
      const {Auth} = this.props;
      return ( 
          <div>
               {
                 Auth.TYPE&&
                 <MainNav />
                       
               }
                {Auth.USERNAME&&Auth.TYPE==="hospital"&&   <HospitalProfile /> }
                {Auth.USERNAME&&Auth.TYPE==="pharmacy"&& <PharmcyProfile /> }
                {Auth.USERNAME&&Auth.TYPE==="Lab"&& <LabProfile /> }
                {Auth.USERNAME&&Auth.TYPE==="admin"&& <AdminProfile /> } 
              
          </div>

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
 
export default  connect( mapStateToProps,mapDispatchToProps)(userHome);