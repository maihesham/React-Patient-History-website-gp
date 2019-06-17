import React ,{Component} from 'react';
import '../style/login.css';
import { connect } from 'react-redux';
import{ LoginTOREDX , ERROR }from '../Actions/useraction';
class LoginUSer extends Component {
  state = {
    Username: null,
    Type: null,
    passord:null,
    numofcomments:0
  }
  handleChangeUsername = (e) => {
    this.setState({
     Username: e.target.value
    })
    console.log(this.state.Username);
  }
  handleChangePassword = (e) => {
    this.setState({
     passord: e.target.value
    })
  }
 
  handleChangeType = (e) => {
    this.setState({
     Type: e.target.value
    })
    console.log(this.state.Type);
  }
  handleSubmit = (e) => {
    e.preventDefault();
  //  console.log(this.state);
   this.props.LoginTOREDX(this.state);
  // this.props.ERROR();
  
  }

  render(){
    const { USERR } = this.props;
    return(
      <div>
      <div className="container"> 
           <div className="row">
             <div className="col-lg-6  offset-md-2  allForm ">
                    <h2>Login</h2>
             </div>
            
             <div className="col-lg-6  offset-md-2 formit">
             <form onSubmit={this.handleSubmit}>
             <div className="center red-text">
              { USERR.MESSAGEERROR ? <p>{USERR.MESSAGEERROR}</p> : null }
            </div>
                <div className="form-group">
                  <input type="text" className="form-control" required autoComplete="off" placeholder="Username" onChange={this.handleChangeUsername}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" required placeholder="Password" autoComplete="off" onChange={this.handleChangePassword}/>
                </div>
                <div className="form-group col-md-4 offset-md-1">
                      <select  className="form-control" required onChange={this.handleChangeType} >
                         <option>..choose</option>
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
const mapStateToProps = (state) => {
  return{
    USERR: state.AuthUser
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
   LoginTOREDX:(user)=>dispatch(LoginTOREDX(user))
   ,ERROR:()=>dispatch(ERROR())
  }
} 
export default  connect(mapStateToProps,mapDispatchToProps)(LoginUSer);
