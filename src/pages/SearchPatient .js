import React ,{Component}from 'react';
import '../style/medicalTest.css';
import { connect } from 'react-redux';
import{  errorMessage}from '../Actions/addactionss';
import $ from 'jquery';
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
  handleReset=()=>{
    $("#formSerchHosptial").trigger("reset");
  }
  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/patient/search',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
         id:this.state.UserID
      }),
    }).then(res=>{
      this.handleReset();
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
             return 0;
           }else if(resData.status===200){
             console.log('from not 404 , 200 in resData');
             let Dis=[];
             let y=resData.data.disease;
             console.log("hhhhhh");
             console.log(resData.data.disease);
             for(var item of y) {
               Dis.push(item.info.name);
               Dis.push(" , ,");
           }
             this.patient={
                userID:this.state.UserID,
                NAME:resData.data.name
               ,NATIONALID:resData.data.nationalId
               ,PHONECANCALL:resData.data.phone
               ,AGE:resData.data.age
               ,BLOODTYPE:resData.data.blood
               ,DESISES:Dis
           }
           this.props.Search_HOstial_patient(this.patient);
           this.props.GETIFO_HOstial_patient();

             return 1;
           }
    }) 
   
  }    
 render(){
    const { patientinfo } = this.props; 
    const {MESSAGES}=this.props;
    return (
        <div className="addmedicalTest"> 
        <div className="container">
               
        <div className="row">
        <div className="center red-text">
                        { MESSAGES.MESSAGE ? <p>{MESSAGES.MESSAGE}</p> : null }
                    </div>
                <div className="col-lg-7  offset-md-2">
                    <h3>search Patient</h3>
                    </div>
                    <div className="col-md-7 offset-md-2 ">
                          <form id="formSerchHosptial" onSubmit={this.handleSubmit}>
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
                                      <th scope="row">ID</th>
                                      <td>{patientinfo.userID}</td>
                                 </tr>
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
      patientinfo:state.patientinfo,
      MESSAGES: state.addaction
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
      Search_HOstial_patient:(info)=>dispatch(Search_HOstial_patient(info)),
      GETIFO_HOstial_patient:()=>dispatch(GETIFO_HOstial_patient()),
      errorMessage:(d)=>dispatch( errorMessage(d))
    }
  } 
  export default  connect(mapStateToProps,mapDispatchToProps)(SearchPatient) ;