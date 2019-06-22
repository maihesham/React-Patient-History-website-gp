import React ,{Component}from 'react';
import { connect } from 'react-redux';
import{ errorMessage}from '../Actions/clinicAddMessages';
import $ from 'jquery';

class AddClinci extends Component {
  state={
    docID:null,
    address:null,
    phone:null,
  }
  handleChangeDcotorID = (e) => {
    this.setState({
     docID: e.target.value
    })
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
  handleREST=()=>{
    console.log("from handle rest");
   $('#addFormClinic').trigger("reset");
 }
  checkDOID=()=>{
        return 1;
  } 
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log("obb "+this.state);
    fetch('http://localhost:8000/clinic/register',{
    method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      address : this.state.address,
      phone :this.state.phone,
      doctor : this.state.docID,
      city :'Egypt',
      capital : 'cairo'
      
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
         console.log("ddddddd  dddddd  "+resData);
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
    $("#aletyclinc").show('slow').delay(1000).fadeOut();
  }
  render(){
    const {MESSAGES}=this.props;
    return (
      <div>
             
      <div className="row">
      <div className="col-lg-7  offset-md-2">
             <h3>Add  clinic</h3>
     </div>
     <div className="alert alert-info"  id="aletyclinc" role="alert">
           { MESSAGES.MESSAGE}
          </div>
   
            <div className="col-md-7 offset-md-2 ">
                <form id="addFormClinic" onSubmit={this.handleSubmit}>
                
                    <div className="form-group">
                  
                      <input type="text" className="form-control" autoComplete="off" required placeholder="Doctor-USername" onChange={this.handleChangeDcotorID}/>
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
      
   </div>
  
          
      );
  }
}

const mapStateToProps = (state) => {
  return{
    MESSAGES: state.clinicMESSAgESs
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    errorMessage:(d)=>dispatch(errorMessage(d))
  }
} 
export default  connect(mapStateToProps,mapDispatchToProps)(AddClinci);
