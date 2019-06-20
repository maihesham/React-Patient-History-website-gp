import React ,{Component} from 'react';
import iconupload from '../icons/upload.png'
import '../style/medicalTest.css'
import { connect } from 'react-redux';
import {  ERRORIds , finaladd} from '../Actions/addactionss';

class  AddMedicalTest extends Component{
  state={
    DocID:null,
    PatID:null,
    phtot:null
  }
  checkids=()=>{
            return 0;
  }
  handleChangeDoctorID = (e) => {
    this.setState({
     DocID: e.target.value
    })
    console.log(this.state.DocID);
  }
  handleChangePatientID = (e) => {
    this.setState({
     PatID: e.target.value
    })
    console.log(this.state.PatID);
  }
  handleChangephoto = (e) => {
    this.setState({
     phtot: e.target.value
    })
    console.log(this.state.PatID);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if(this.checkids()===1){
             this.props.finaladd();
    }else{
          this.props.ERRORIds();
    }
 
  
  }
 render(){
  const {MESSAGES}=this.props;
  return (
    <div className="addmedicalTest"> 
      <div className="center red-text">
                        { MESSAGES.MESSAGE ? <p>{MESSAGES.MESSAGE}</p> : null }
                    </div>
    <div className="container">
           
    <div className="row">
    <div className="col-lg-7  offset-md-2">
           <h3>Add  MedicalTest</h3>
        </div>
          <div className="col-md-7 offset-md-2 ">
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input type="text" autoComplete="off" className="form-control" required placeholder="Doctor-ID" onChange={this.handleChangeDoctorID}/>
                  </div>
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
     ERRORIds:()=>dispatch(ERRORIds()),
     finaladd:()=>dispatch(finaladd())
  }
} 
export default  connect(mapStateToProps,mapDispatchToProps)( AddMedicalTest );
