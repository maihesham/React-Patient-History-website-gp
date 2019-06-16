import React from 'react';

import '../style/selectuser.css';
import Navbarcomponents from '../Componentss/navbarcomponent';
const SelectUSer = ()=> {
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
                                    <input type="text" autoComplete="off" className="form-control" required placeholder="ID" />
                                    <button type="submit" className="btn btn-primary">Search</button>
                       </div>
                </div>
               
                <div className="col-md-6">
                    <h3>title</h3>
                    </div>
                <div className="col-md-7">
                <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
               
           </div>
     </div>
     
  );
}

export default SelectUSer;
