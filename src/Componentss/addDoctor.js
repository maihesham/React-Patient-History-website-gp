import React ,{Component}from 'react';
import{  errorMessage}from '../Actions/addactionss';
import { connect } from 'react-redux';
import $ from 'jquery';
import '../style/manageDives.css'
class AddDoctor extends Component{
  state={
    name:null,
    email:null,
    phone:null,
    major:null,
    License_number:null,
    yearsofexpr:null,
  }
  handleChangename = (e) => {
    this.setState({
     name: e.target.value
    })
    
  }
  handleREST=()=>{
    console.log("from handle rest");
   $('#addFormDoctor').trigger("reset");
 }
  handleChangeEmail = (e) => {
    this.setState({
     email: e.target.value
    })
    
  }
  handleChangePhonenumber = (e) => {
    this.setState({
     phone: e.target.value
    })
    
  }
  handleChangemajor = (e) => {
    this.setState({
    major: e.target.value
    })
    
  }
  handleChangelicensenumber = (e) => {
    this.setState({
     License_number: e.target.value
    })
    
  }
  handleChangeyeaarofexpresiness= (e) => {
    this.setState({
    yearsofexpr : e.target.value
    })
    
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch('http://localhost:8000/doctor/add',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:this.state.name,
        email:this.state.email,
        phone:this.state.phone,
        major:this.state.major,
        licenceNumber:this.state.License_number,
        experienceYear:this.state.yearsofexpr,
      }),
    }).then(res=>{
      this.handleREST();
      console.log("ffffffffffffffffffffffffffffffffffff");
      if(res.status!==200 && res.status!==201){
        console.log("from status");
        return 0;
      }
      return res.json();
    }).then(resData=>{
     
           console.log(resData);
           if(resData.status===404){
             console.log("from 404");
             this.props.errorMessage(resData.message);
             this.handleAlertError();
             return 0;
           }else if(resData.status===200){
             console.log('from not 404 , 200 in resData');
             this.props.errorMessage(resData.message);
             this.handleAlertError();
             return 1;
           }
           
    }) 
  }
  handleAlertError=()=>{
    console.log("ddddddddddddddddddddddddddddddddddddddddddd");
    $("#aletyDocotr").show('slow').delay(1000).fadeOut();
  }
 render(){
  const {MESSAGES}=this.props;

  return (
    <div>
           
    <div className="row">
    <div className="col-lg-7  offset-md-2">
           <h3>Add  Doctor</h3>
     </div>
     <div className="col-lg-7  offset-md-2">
     <div className="alert alert-info"  id="aletyDocotr" role="alert">
           { MESSAGES.MESSAGE}
          </div>
     </div>
          <div className="col-md-7 offset-md-2 ">
              <form id="addFormDoctor" onSubmit={this.handleSubmit}>
              
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="Doctor-name" onChange={this.handleChangename}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="Phone-Number" onChange={this.handleChangePhonenumber}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="medical major" onChange={this.handleChangemajor}/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" autoComplete="off" required placeholder="Email" onChange={this.handleChangeEmail}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="Years of experiences" onChange={this.handleChangeyeaarofexpresiness}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="License-number" onChange={this.handleChangelicensenumber} />
                  </div>
               
                <div className="form-group">
                           <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
            </form>
          </div>
    </div>
    
 </div>

          
  );
 }
}
const mapStateToProps = (state) => {
  return{
    MESSAGES: state.addaction
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    errorMessage:(d)=>dispatch( errorMessage(d))
  }
} 
export default  connect(mapStateToProps,mapDispatchToProps)(AddDoctor);
