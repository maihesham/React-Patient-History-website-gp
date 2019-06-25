import React ,{Component} from 'react';
import { Redirect} from 'react-router-dom'

class logout extends Component{
    render(){
    
      return(
       <div>
           <Redirect from='/logout' exact to='/login' />
       </div>
      
      );
        
      
    }    
      
  }

export default  logout;
