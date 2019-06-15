import React ,{Component} from 'react';
import iconupload from '../icons/upload.png'
import '../style/medicalTest.css'
class  AddMedicalTest extends Component{
 render(){
  return (
    <div className="addmedicalTest"> 
    <div className="container">
           
    <div className="row">
    <div className="col-lg-7  offset-md-2">
           <h3>Add  MedicalTest</h3>
        </div>
          <div className="col-md-7 offset-md-2 ">
              <form >
              
                  <div className="form-group">
                    <input type="text" autoComplete="off" className="form-control" required placeholder="Doctor-ID" />
                  </div>
                  <div className="form-group">
                    <input type="text" autoComplete="off" className="form-control" required placeholder="USer-ID" />
                  </div>
                  <div className="row">
                        <div className="col">
                            <input type="file" autoComplete="off" name="file" id="file" multiple className="inputfile" />
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

export default  AddMedicalTest;
