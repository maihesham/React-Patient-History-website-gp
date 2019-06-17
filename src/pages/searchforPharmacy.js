import React ,{Component}from 'react';
import '../style/medicalTest.css';
import { connect } from 'react-redux';
import {SEARCH_FOR_Pharmcy_GET_PATIENT , GETIFO_Pharmcy_patient , COMMENT} from '../Actions/pharmcyActions';
import {cOOMENTINCReaseONE} from '../Actions/useraction';
class SearchPatientForPharmcy extends Component {
  patient={}
  handleSubmit = (e) => {
    e.preventDefault();
    this.patient={
        AGE:25,
        GENDER:"male"
        ,BLOODTYPE:"o+"
        ,DESISES:["d1 ","d1 ","d1 ","d1 ","d1 "],
        MEDICIEN:["M1","M1","M1","M1","M1","M1"]
    }
    this.props.SEARCH_FOR_Pharmcy_GET_PATIENT(this.patient);
    this.props.GETIFO_Pharmcy_patient();
  }  
  handleSubmitComment = (e) => {
    e.preventDefault();
    this.patient={
        AGE:null,
        GENDER:null
        ,BLOODTYPE:null
        ,DESISES:[],
        MEDICIEN:[]
    }
    this.props.SEARCH_FOR_Pharmcy_GET_PATIENT(this.patient);
    this.props.GETIFO_Pharmcy_patient();
    this.props.COMMENT();
    this.props.cOOMENTINCReaseONE();
  }  
 
 render(){
    const { patientinfo ,USERR} = this.props; 
    return (
        <div className="addmedicalTest"> 
        <div className="container">
        <div className="row">
                <div className="col-lg-7  offset-md-2">
                    <h3>Comment Patient</h3>
                    <div className="center red-text">
                        {patientinfo.MESSAGETHI ? <p>{patientinfo.MESSAGETHI}</p> : null }
                        </div>
                    <div className="center red-text">
                              {USERR.NUMOFCOMMENTS===5 ?<h3> WILL Add Ads soon</h3> :null} 
                       </div>
                        
                    </div>
                    <div className="col-md-7 offset-md-2 ">
                          <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                    <button type="submit" className="btn btn-primary">comment</button>
                            </div>
                        </form>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-lg-7  offset-md-2">
                    <table className="table table-dark">
                             <tbody>
                                
                                 <tr>
                                    <th scope="row">Age</th>
                                      <td>{patientinfo.AGE}</td>
                                 </tr>
                                 <tr>
                                     <th scope="row">Gender</th>
                                     <td>{patientinfo.GENDER}</td>
                                </tr> 
                                
                                <tr>
                                     <th scope="row">BloodType</th>
                                     <td>{patientinfo.BLOODTYPE}</td>
                                </tr> 
                                <tr>
                                       <th scope="row">DESISES</th>
                                       <td>{patientinfo.DESISES}</td>
                                </tr>  
                                <tr>
                                       <th scope="row">MEdicien</th>
                                       <td>{patientinfo.MEDICIEN}</td>
                                </tr>                        
                                           </tbody>
                                                        
                             </table>
                        </div>
                </div>
               
              {patientinfo.DESISES && patientinfo.AGE!==null ? 
                <div className="col-md-7 offset-md-2 ">
                          <form onSubmit={this.handleSubmitComment}>
                          <div className="form-group">
                          <textarea className="form-control" required id="exampleFormControlTextarea1" rows="3"></textarea>

                            </div>
                            <div className="form-group">
                                    <button type="submit" className="btn btn-primary">comment</button>
                            </div>
                        </form>
                    </div>
                      :null}
                     
        
     </div>
     </div> 
              
      );
 }
}

const mapStateToProps = (state) => {
    return{
      patientinfo:state.pharmcysearch ,
      USERR: state.AuthUser
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
       SEARCH_FOR_Pharmcy_GET_PATIENT:(info)=>dispatch(SEARCH_FOR_Pharmcy_GET_PATIENT(info)),
       GETIFO_Pharmcy_patient:()=>dispatch(GETIFO_Pharmcy_patient()),
       COMMENT:()=>dispatch(COMMENT()),
       cOOMENTINCReaseONE:()=>dispatch(cOOMENTINCReaseONE())
    }
  } 
  export default  connect(mapStateToProps,mapDispatchToProps)(SearchPatientForPharmcy) ;