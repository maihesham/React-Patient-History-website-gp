import React ,{Component} from 'react';
class AddPharmcy extends Component {
 render(){
  return (
    <div>
           
    <div className="row">
    <div className="col-lg-7  offset-md-2">
           <h3>Add pharmacy</h3>
      </div>
          <div className="col-md-7 offset-md-2 ">
              <form >
              
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="Address" />
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" autoComplete="off" required placeholder="Phone-Number" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="License-number" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" autoComplete="off" required placeholder="days of work" />
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" autoComplete="off" required placeholder="from(hour)" />
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control"autoComplete="off"  required placeholder="to(hour)" />
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

export default   AddPharmcy;
