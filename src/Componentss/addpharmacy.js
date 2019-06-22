import React ,{Component}from 'react';
import { connect } from 'react-redux';
import{  errorMessage}from '../Actions/addactionss';
import $ from 'jquery';

class ADDPharmcy extends Component {
  state={
    email:null,
    address:null,
    phone:null,
    name:null
  }
  handleChangeDcotorID = (e) => {
    this.setState({
     email: e.target.value
    })
  }
  handleREST=()=>{
    console.log("from handle rest");
   $('#addFormPharmcy').trigger("reset");
 }
  handleChangeaddress = (e) => {
    this.setState({
     address: e.target.value
    })
    
  }
  handleChangePhonenumber = (e) => {
    this.setState({
     phone: e.target.value
    })
    
  }
 
  checkDOID=()=>{
        return 1;
  } 
  handleChangename =(e)=>{
    this.setState({
      name: e.target.value
     })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log("obb "+this.state);
    fetch('http://localhost:8000/pharmacy/register',{
    method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      address : this.state.address,
      phone :this.state.phone,
      email : this.state.email,
      city :'Egypt',
      capital : 'cairo'
      ,name:this.state.name
      
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
          this.props.errorMessage(resData.message);
           console.log('from not 404 , 200 in resData');
           this.handleAlertError();

           return 1;
         }
  }) 
    
  }
  handleAlertError=()=>{
    console.log("ddddddddddddddddddddddddddddddddddddddddddd");
    $("#aletyPharmcy").show('slow').delay(1000).fadeOut();
  }
  render(){
    const {MESSAGES}=this.props;
    return (
      <div>
             
      <div className="row">
      <div className="col-lg-7  offset-md-2">
             <h3>Add  pharmcy</h3>
     </div>
     <div className="alert alert-info"  id="aletyPharmcy" role="alert">
           { MESSAGES.MESSAGE}
          </div>
     </div>
            <div className="col-md-7 offset-md-2 ">
                <form id="addFormPharmcy"  onSubmit={this.handleSubmit}>
                <div className="form-group">
                   
                   <input type="text" className="form-control" autoComplete="off" required placeholder="NAme" 
                   onChange={this.handleChangename}/>
                 </div>
                    <div className="form-group">
                   
                      <input type="email" className="form-control" autoComplete="off" required placeholder="email" onChange={this.handleChangeDcotorID}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" autoComplete="off" required placeholder="Address" onChange={this.handleChangeaddress}/>
                    </div>
                    <div className="form-group">
                      <input type="number" className="form-control" autoComplete="off" required placeholder="Phone-Number" onChange={this.handleChangePhonenumber}/>
                    </div>
                  <div className="form-group">
                             <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
              </form>
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
export default  connect(mapStateToProps,mapDispatchToProps)(ADDPharmcy);
