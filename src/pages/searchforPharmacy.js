import React ,{Component}from 'react';
import '../style/medicalTest.css';
import { connect } from 'react-redux';
import {Search_HOstial_patient , GETIFO_HOstial_patient} from '../Actions/hospitalsearch_patient';
class SearchPatient extends Component {
state = {UserID: null}
handleChangeUserID = (e) => {
    this.setState({
        UserID: e.target.value
    })
    console.log(this.state.UserID);
  }
  patient={}
  handleSubmit = (e) => {
    e.preventDefault();
    this.patient={
         NAME:"mai"
        ,NATIONALID:"012222222222222222"
        ,PHONECANCALL:"01233333333"
        ,AGE:25,
        GENDER:"male"
        ,BLOODTYPE:"o+"
        ,DESISES:["d1 ","d1 ","d1 ","d1 ","d1 "]
    }
    this.props.Search_HOstial_patient(this.patient);
    this.props.GETIFO_HOstial_patient();
  }    
 render(){
    const { patientinfo } = this.props; 
    return (
        <div className="addmedicalTest"> 
        <div className="container">
               
        <div className="row">
                <div className="col-lg-7  offset-md-2">
                    <h3>search Patient</h3>
                    </div>
                    <div className="col-md-7 offset-md-2 ">
                          <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" autoComplete="off" required placeholder="USer-ID" onChange={this.handleChangeUserID}/>
                            </div>
                            <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-lg-7  offset-md-2">
                    <table className="table table-dark">
                             <tbody>
                                  <tr>
                                      <th scope="row">name</th>
                                      <td>{patientinfo.NAME}</td>
                                 </tr>
                                 <tr>
                                      <th scope="row">nationalID</th>
                                      <td>{patientinfo.NATIONALID}</td>
                                 </tr>
                                 <tr>
                                      <th scope="row">Phone</th>
                                      <td>{patientinfo.PHONECANCALL}</td>
                                 </tr>
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
                                           </tbody>
                                                        
                             </table>
                        </div>
                </div>
        
     </div>
     </div> 
              
      );
 }
}

const mapStateToProps = (state) => {
    return{
      patientinfo:state.patientinfo
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
      Search_HOstial_patient:(info)=>dispatch(Search_HOstial_patient(info)),
      GETIFO_HOstial_patient:()=>dispatch(GETIFO_HOstial_patient())
    }
  } 
  export default  connect(mapStateToProps,mapDispatchToProps)(SearchPatient) ;