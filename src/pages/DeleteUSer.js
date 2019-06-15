import React ,{Component}from 'react';

import '../style/selectuser.css';
import Navbarcomponents from '../Componentss/navbarcomponent';
class DeleteUSer extends Component {
 render(){
      return (
            <div>
                <Navbarcomponents />
                <div className="row seelect">
                       <div className="col-md-4">
                             <select  className="form-control" required >
                                     <option>doctor</option>
                                     <option>Clinic</option>
                                     <option>hospital</option>
                                     <option>Lab</option>
                                     <option>pharmacy</option>
                                 </select>
                       </div>
                       <div className="col-md-6">
                             <div className="form-group">
                                         <input type="text" className="form-control" required placeholder="ID" />
                                         <button type="submit" className="btn btn-primary">Delete</button>
                            </div>
                     </div>
                </div>
          </div>
          
       );
 }
}

export default DeleteUSer;
