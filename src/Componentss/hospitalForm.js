import React ,{Component} from 'react';
import { numberLiteralTypeAnnotation } from '@babel/types';
class AddHospital extends Component {
  state={
    name:null,
    address:null,
    phone:null,
    License_number:null,
    major:null,
    days_of_work:null,
    hour_from:null,
    hour_to:null
  }
  handleChangename = (e) => {
    this.setState({
     name: e.target.value
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
  handleChangelicensenumber = (e) => {
    this.setState({
     License_number: e.target.value
    })
    
  }
  handleChangemajor = (e) => {
    this.setState({
    major: e.target.value
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
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
 render(){
  return (
    <div>
           
    <div className="row">
    <div className="col-lg-7  offset-md-2">
           <h3>Add hospital</h3>
      </div>
          <div className="col-md-7 offset-md-2 ">
              <form  onSubmit={this.handleSubmit}>
             
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="Name" onChange={this.handleChangename}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="Address" onChange={this.handleChangeaddress}/>
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" autoComplete="off" required placeholder="Phone-Number" onChange={this.handleChangePhonenumber}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="License-number" onChange={this.handleChangelicensenumber}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="major(General)" onChange={this.handleChangemajor} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="days of work" onChange={this.handleChangedayofworks} />
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" autoComplete="off"  required placeholder="from(hour)" onChange={this.handleChangehoursfrom}/>
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

export default   AddHospital;
