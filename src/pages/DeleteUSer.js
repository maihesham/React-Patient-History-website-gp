import React ,{Component}from 'react';
import { ERRORDelete , finalDElete} from '../Actions/addactionss';
import '../style/adduser.css';
import Navbarcomponents from '../Componentss/navbarcomponent';
import { connect } from 'react-redux';
import $ from 'jquery';

class DeleteUSer extends Component {
      url='';
      state={
            id:null,
            type:null
      }
      createURL=()=>{
         console.log("from hereeeeeeeeeeee");
          console.log(this.state.type);
            if(this.state.type==='doctor'){
              this.url='http://localhost:8000/doctor/delete';
            }else if(this.state.type==='Lab'){
             this.url='http://localhost:8000/lab/delete';
            }else if(this.state.type==='hospital'){
             this.url='http://localhost:8000/hospital/delete';
            }else if(this.state.type==='pharmacy'){
             this.url='http://localhost:8000/pharmacy/delete';
            }else if(this.state.type==='Clinic'){
              this.url='http://localhost:8000/clinic/delete';
            }
         }
         handleREST=()=>{
          console.log("from handle rest");
         $('#FORMdelet').trigger("reset");
       }
      handleChangeIDbutton =(e)=>{
            e.preventDefault();
            console.log(this.state);
            this.createURL();
            console.log("url = ");
            console.log(this.url);      
          fetch(this.url,{
                  method:'post',
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({
                    username:this.state.id
                  }),
                }).then(res=>{
                  if(res.status!==200 && res.status!==201){
                        this.props.ERRORDelete();
                    return 0;
                  }
                  return res.json();
                }).then(resData=>{
                  this.handleREST();
                       console.log(resData);
                       if(resData.status===404){
                        this.props.ERRORDelete();
                        
                         return 0;
                       }else if(resData.status===200){
                        this.props.finalDElete();
                       
                         return 1;
                       }
                })
         
      }
      handleChangeID = (e) => {
            this.setState({
             id: e.target.value
            })
          }
          handleChangeType=(e)=>{
            this.setState({
                  type: e.target.value
                 })
          }   
 render(){
      const {MESSAGES}=this.props;  
      return (
            <div>
                <Navbarcomponents />
                <div className="row">
                        <div className="center red-text col-md-5">
                                    { MESSAGES.MESSAGE ? <p>{MESSAGES.MESSAGE}</p> : null }
                              </div>
                </div>
              
                <form id="FORMdelet" onSubmit={this.handleChangeIDbutton}>
                <div className="row seelect">
                       <div className="col-md-4">
                             <select  className="form-control" required onChange={this.handleChangeType}>
                                     <option>...choose</option>
                                     <option>doctor</option>
                                     <option>Clinic</option>
                                     <option>hospital</option>
                                     <option>Lab</option>
                                     <option>pharmacy</option>
                                 </select>
                       </div>
                       <div className="col-md-6">
                             <div className="form-group">
                                         <input type="text" className="form-control" required placeholder="ID" onChange={this.handleChangeID}/>
                                         <button type="submit" className="btn btn-primary">Delete</button>
                            </div>
                     </div>
                     </div>
                     </form>
               
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
       ERRORDelete:()=>dispatch(ERRORDelete()),
       finalDElete:()=>dispatch(finalDElete())
      }
    } 
    export default  connect(mapStateToProps,mapDispatchToProps)( DeleteUSer);
