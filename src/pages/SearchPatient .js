import React ,{Component}from 'react';
import '../style/medicalTest.css'
class SearchPatient extends Component {
 render(){
    return (
        <div className="addmedicalTest"> 
        <div className="container">
               
        <div className="row">
                <div className="col-lg-7  offset-md-2">
                    <h3>search Patient</h3>
                    </div>
                    <div className="col-md-7 offset-md-2 ">
                        <form >
                            <div className="form-group">
                                <input type="text" className="form-control" autoComplete="off" required placeholder="USer-ID" />
                            </div>
                            <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-lg-7  offset-md-2">
                            <p>patient info</p>
                        </div>
                </div>
        
     </div>
     </div> 
              
      );
 }
}

export default  SearchPatient ;
