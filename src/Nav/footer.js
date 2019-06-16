import React from 'react';
import '../style/nav.css';
import facebook from '../icons/i1png.png';
import twitter from '../icons/i2.png';
import linkedin from '../icons/i3.png';
const Footer=() =>{
  return (
  
    <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-4">
                                 <h6>To contect us send your email</h6>
                                 <p>if your are a docotr or hospital or paitent send to us to connect then can create account and manage process efficent</p>
                          </div>
                          <div className="col-md-3">
                                  <form>
                                  <input type="email" className="form-control" placeholder="enter email" />
                                   <button type="submit" className="btn btn-primary">Submit</button> 
                                  </form>
                           </div>
                          
                           <div className="col-md-1 mt-md-0 mt-3">
                                 <img src={facebook} alt="Logo" />
                           </div>
                           <div className="col-md-1 mt-md-0 mt-3">
                           <img src={twitter} alt="Logo" />
                           </div>
                           <div className="col-md-1 mt-md-0 mt-3">
                           <img src={linkedin} alt="Logo" />
                           </div>
             </div>
            </div>
    </footer>
   
  );
       
      
  }
export default  Footer;
