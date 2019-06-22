import React ,{Component} from 'react';
import '../style/login.css';
import { connect } from 'react-redux';
import{ LoginTOREDX , ERROR }from '../Actions/useraction';
import $ from 'jquery';

class LoginUSer extends Component {
  
  v=0;
  b=0;
  G=0;
  url='';
  state = {
    Username: null,
    Type: '..Login As ...',
    passord:null,
    numofcomments:0
  }
  handleREST=(e)=>{
     console.log("from handle rest");
    $('#LoginForm').trigger("reset");
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
  createURL=()=>{
     if(this.state.Type==='admin'){
       this.url='http://localhost:8000/admin/login';
     }else if(this.state.Type==='Lab'){
      this.url='http://localhost:8000/lab/login';
     }else if(this.state.Type==='hospital'){
      this.url='http://localhost:8000/hospital/login';
     }else if(this.state.Type==='pharmacy'){
      this.url='http://localhost:8000/pharmacy/login';
     }
  }
  CheckTypeUSerName=(b)=>{
     if(b==='..Login As ...'|| b===null){
       return 0;
     }else{
       return 1;
     }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.b=this.state.Type;
   this.G=this.CheckTypeUSerName(this.b);
    if(this.G===0){
      console.log("error from type");
      this.props.ERROR();
      return 0;  
    }
    this.createURL();
    // /lab/login
    if(this.url===''){
      return 0;
    }
    console.log('url' , this.url);
    fetch(this.url,{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        username:this.state.Username,
        password:this.state.passord
      }),
    }).then(res=>{
      if(res.status!==200 && res.status!==201){
        console.log("from status");
        this.props.ERROR();
        return 0;
      }
      return res.json();
    }).then(resData=>{
           console.log(resData);
           if(resData.status===404){
             console.log("from 404");
             this.props.ERROR();
             return 0;
           }else if(resData.status===200){
            this.props.LoginTOREDX(this.state);           
             console.log('from not 404 , 200 in resData');
             return 1;
           }
    })
   
    // this.props.ERROR();
    // this.props.LoginTOREDX(this.state);
  
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
             <form id="LoginForm" onSubmit={this.handleSubmit}>
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
                         <option>..Login As ...</option>
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