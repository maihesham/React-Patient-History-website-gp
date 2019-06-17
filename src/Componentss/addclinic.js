import React ,{Component}from 'react';
import { connect } from 'react-redux';
import{ GDoctorIDERROR ,DoctorIDfound}from '../Actions/addactionss';
class AddClinci extends Component {
  state={
    docID:null,
    address:null,
    phone:null,
    days_of_work:null,
    hour_from:null,
    hour_to:null
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
  handleChangedayofworks = (e) => {
    this.setState({
    days_of_work: e.target.value
    })
    
  }
  handleChangehoursfrom = (e) => {
    this.setState({
     hour_from: e.target.value
    })
    
  }
  handleChangehoursto = (e) => {
    this.setState({
     hour_to: e.target.value
    })
    
  }
  checkDOID=()=>{
        return 1;
  } 
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if(this.checkDOID()){
      console.log("fo");
            this.props.DoctorIDfound();
     
    }else {
      console.log("ddddd");
      this.props.GDoctorIDERROR();
      
    }
    
  }
  render(){
    const {MESSAGES}=this.props;
    return (
      <div>
             
      <div className="row">
      <div className="col-lg-7  offset-md-2">
             <h3>Add  clinic</h3>
     </div>
            <div className="col-md-7 offset-md-2 ">
                <form onSubmit={this.handleSubmit}>
                
                    <div className="form-group">
                    <div className="center red-text">
                        { MESSAGES.MESSAGE ? <p>{MESSAGES.MESSAGE}</p> : null }
                    </div>
                      <input type="text" className="form-control" autoComplete="off" required placeholder="Doctor-ID" onChange={this.handleChangeDcotorID}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" autoComplete="off" required placeholder="Address" onChange={this.handleChangeaddress}/>
                    </div>
                    <div className="form-group">
                      <input type="number" className="form-control" autoComplete="off" required placeholder="Phone-Number" onChange={this.handleChangePhonenumber}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" autoComplete="off" required placeholder="days of work" onChange={this.handleChangedayofworks}/>
                    </div>
                    <div className="form-group">
                      <input type="number" className="form-control" autoComplete="off" required placeholder="from(hour)" onChange={this.handleChangehoursfrom}/>
                    </div>
                    <div className="form-group">
                      <input type="number" className="form-control" autoComplete="off"  required placeholder="to(hour)" onChange={this.handleChangehoursto}/>
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
    GDoctorIDERROR:()=>dispatch(GDoctorIDERROR()),
    DoctorIDfound:()=>dispatch(DoctorIDfound())
  }
} 
export default  connect(mapStateToProps,mapDispatchToProps)(AddClinci);
