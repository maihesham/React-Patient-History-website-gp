import React ,{Component} from 'react';
import iconupload from '../icons/upload.png'
import '../style/medicalTest.css'
import { connect } from 'react-redux';
import {  ERRORIds , finaladd} from '../Actions/addactionss';
import $ from 'jquery';

class  AddSurgy extends Component{
   Auth=null;
  state={
    PatID:null,
    filess:null
  }
  handleREST=()=>{
    console.log("from handle rest");
   $('#addFormSurgy').trigger("reset");
 }
  handleChangePatientID = (e) => {
    this.setState({
     PatID: e.target.value
    })
    console.log(this.state.PatID);
  }
  handleChangephoto = (e) => {
    this.setState({
      filess:e.target.files[0]
    })
    
}
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state); 
    const data = new FormData();
    data.append('username', this.state.PatID);
    data.append('file', this.state.filess);
    data.append( 'hospital',this.Auth.USERNAME);
    fetch('http://localhost:8000/hospital/addFile',{
      method:'post',
      body:data,
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
             this.props.ERRORIds();
             this.handleAlertError();
             return 0;
           }else if(resData.status===200){
            this.props.finaladd();
            this.handleAlertError();
             console.log('from not 404 , 200 in resData');
             return 1;
           }
    }) 

      
   /* if(this.checkids()===1){
            
    }else{
         
    }*/
 
  
  }
  handleAlertError=()=>{
    console.log("ddddddddddddddddddddddddddddddddddddddddddd");
    $("#aletySurgy").show('slow').delay(1000).fadeOut();
  }
 render(){
  const {MESSAGES}=this.props;
  this.Auth= this.props;

  return (
    <div className="addmedicalTest"> 
    
    <div className="container">
           
    <div className="row">
    <div className="col-lg-7  offset-md-2">
           <h3>Add  Surgy</h3>
        </div>
        <div className="alert alert-info"  id="aletySurgy" role="alert">
           { MESSAGES.MESSAGE}
          </div>
     </div>
          <div className="col-md-7 offset-md-2 ">
              <form  id="addFormSurgy" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input type="text" autoComplete="off" className="form-control" required placeholder="USer-ID" onChange={this.handleChangePatientID}/>
                  </div>
                  <div className="row">
                        <div className="col">
                            <input type="file" autoComplete="off" name="file" id="file"required  multiple className="inputfile" onChange={this.handleChangephoto} />
                            <label for="file"><img src={iconupload} alt=""/>MedicalTest</label>
                        </div>
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
    MESSAGES: state.addaction,
    Auth:state.AuthUser
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
     ERRORIds:()=>dispatch(ERRORIds()),
     finaladd:()=>dispatch(finaladd())
  }
} 
export default  connect(mapStateToProps,mapDispatchToProps)( AddSurgy  );
