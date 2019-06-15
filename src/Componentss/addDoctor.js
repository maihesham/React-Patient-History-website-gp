import React ,{Component}from 'react';
import iconupload from '../icons/upload.png'
class AddDoctor extends Component{
 render(){
  return (
    <div>
           
    <div className="row">
    <div className="col-lg-7  offset-md-2">
           <h3>Add  Doctor</h3>
   </div>
          <div className="col-md-7 offset-md-2 ">
              <form >
              
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="Doctor-name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="Phone-Number" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="medical major" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" autoComplete="off" required placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="Years of experiences" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="License-number" />
                  </div>
                  <div className="row">
                        <div className="col">
                            <input type="file" name="file" id="file" autoComplete="off" multiple className="inputfile" />
                            <label for="file"><img src={iconupload} alt=""/>certifications</label>
                        </div>
                        <div className="col">
                              <input type="file" name="file" autoComplete="off"  id="file" multiple className="inputfile" />
                              <label for="file"><img src={iconupload} alt=""/>research paper</label>
                        </div>
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

export default  AddDoctor;
