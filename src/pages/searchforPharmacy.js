import React ,{Component}from 'react';
import '../style/medicalTest.css';
import { connect } from 'react-redux';
import {SEARCH_FOR_Pharmcy_GET_PATIENT , GETIFO_Pharmcy_patient , COMMENT} from '../Actions/pharmcyActions';
import {cOOMENTINCReaseONE} from '../Actions/useraction';
class SearchPatientForPharmcy extends Component {
  patient={}
  state={Comment:null,userID:null,PhID:null}
  handleChangeComment = (e) => {
    this.setState({
      Comment: e.target.value
    })
   
  }
  /** this.patient={
        AGE:25,
        GENDER:"male"
        ,BLOODTYPE:"o+"
        ,DESISES:["d1 ","d1 ","d1 ","d1 ","d1 "],
        MEDICIEN:["M1","M1","M1","M1","M1","M1"]
    }
    this.props.SEARCH_FOR_Pharmcy_GET_PATIENT(this.patient);
    this.props.GETIFO_Pharmcy_patient(); */
  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/pharmacy/randomPatient',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>{
      if(res.status!==200 && res.status!==201){
        console.log("from status");
        return 0;
      }
      return res.json();
    }).then(resData=>{
           console.log(resData);
           if(resData.status===404){
             console.log("from 404");
          
             return 0;
           }else if(resData.status===200){
             console.log('from not 404 , 200 in resData');
             let Dis=[];
             let y=resData.medicine.medicines;
             for(var item of y) {
               Dis.push(item);
               Dis.push(" , ,");
           }
           console.log("patient medicien ");
           console.log(Dis);
           this.state.userID=resData.medicine.id;
             this.patient={
              id:resData.medicine.id,
              MEDICIEN:Dis
          }
          this.props.SEARCH_FOR_Pharmcy_GET_PATIENT(this.patient);
          this.props.GETIFO_Pharmcy_patient();

             return 1;
           }
    }) 
   
  }  
  handleSubmitComment = (e) => {
    e.preventDefault();
    console.log( "user ID ",this.state.userID);
    console.log("Pharmcy ID ",this.state.PhID);
    console.log("comment   ",this.state.Comment);
    fetch('http://localhost:8000/pharmacy/comment',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },body:JSON.stringify({
        userId :this.state.userID,
        comment :this.state.Comment,
        pharmacyId :this.state.PhID
      })
    }).then(res=>{
      console.log("ffffffffffffffffffffffffffffffffffff");
      if(res.status!==200 && res.status!==201){
        console.log("from status");
        return 0;
      }
      return res.json();
    }).then(resData=>{
      console.log("from dddddddddddddddddddddddd");
           console.log(resData);
           if(resData.status===404){
             console.log("from 404");
             return 0;
           }else if(resData.status===200){
             console.log('from not 404 , 200 in resData');
             return 1;
           }
           this.patient={
            id:null,
            MEDICIEN:[]
        }
        this.props.SEARCH_FOR_Pharmcy_GET_PATIENT(this.patient);
        this.props.GETIFO_Pharmcy_patient();
        this.props.COMMENT();
    }) 
   


  /*  this.patient={
        AGE:null,
        GENDER:null
        ,BLOODTYPE:null
        ,DESISES:[],
        MEDICIEN:[]
    }
    this.props.SEARCH_FOR_Pharmcy_GET_PATIENT(this.patient);
    this.props.GETIFO_Pharmcy_patient();
    this.props.COMMENT();*/
  }  
 
 render(){
   console.log("sssssssssssss" , this.state.userID);
   const {patientinfo, USERR}= this.props; 
   this.state.PhID=USERR.USERNAME;
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
                                    <button type="submit" className="btn btn-primary">Search</button>
                            </div>
                        </form>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-lg-7  offset-md-2">
                    <table className="table table-dark">
                             <tbody>
                                     <tr>
                                       <th scope="row">medicine</th>
                                       <td>{patientinfo.MEDICIEN}</td>
                                       </tr>                        
                                           </tbody>
                                                        
                             </table>
                        </div>
                </div>
               
              {patientinfo.id ? 
                <div className="col-md-7 offset-md-2 ">
                          <form onSubmit={this.handleSubmitComment}>
                          <div className="form-group">
                          <textarea className="form-control" required id="exampleFormControlTextarea1" onChange={this.handleChangeComment} rows="3"></textarea>

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