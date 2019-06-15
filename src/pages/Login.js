import React ,{Component} from 'react';
import '../style/login.css'
class LoginUSer extends Component {
  
   

  
  render(){
    return (

      <div>
      <div className="container"> 
           <div className="row">
             <div className="col-lg-6  offset-md-2  allForm ">
                     <h2>Login</h2>
             </div>
            
             <div className="col-lg-6  offset-md-2 formit">
             <form >
             <div className="alert  alert-danger alert-dismissible fade " role="alert">
                    <strong>wrong Data , please Try Again</strong>  For Example: check user type 
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                <div className="form-group">
                  <input type="text" className="form-control" required autoComplete="off" placeholder="Username"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" required placeholder="Password" autoComplete="off"/>
                </div>
                <div className="form-group col-md-4 offset-md-1">
                      <select  className="form-control" required >
                          <option>admin</option>
                          <option>hospital</option>
                          <option>Lab</option>
                          <option>pharmacy</option>
                        </select>
                </div>
                <div className="form-group col-md-4 offset-md-1">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
                </div>
               </div> 
               </div>
             </div>   
    );
  }
}

export default LoginUSer;
