import React ,{Component} from 'react';
import pharmacy from '../icons/medicine.png';
import Hospital from '../icons/ambulance.png';
import lab from '../icons/microscope.png';
import clinci from '../icons/nurse.png';
import Doctor from '../icons/doctor.png';
import AndeoideApp from '../icons/anpng.png';
import logo from '../icons/exam.png';
import '../style/home.css';
import Footer from '../Nav/footer';
class HomePage extends Component {
  render(){
    return (
   
      <div>
          
        <div className="content">
          
         <div className="container"> 
             <div className="row">
                 <div className="intro col-mid-4">
                             <div className="media">
                              <img src={logo} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h5 >intro about app and web-site</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                              </div>
                            </div>
                 </div>
                 </div>
                <div className="row hasAllUsers"> 
                <div className="androideApp col-lg-5">
                         <div className="media">
                               <img src={AndeoideApp} alt="Logo" className="align-self-start mr-3" />
                               <div className="media-body">
                                 <h5 className="mt-0">androideApp</h5>
                                 <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                               </div>
                             </div>
                  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                 <div className="Doctor col-lg-5">
                 <div className="media">
                              <img src={Doctor} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h5 className="mt-0">Doctor</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                              </div>
                   </div>
                 </div>
                 <div className="clinic col-lg-5">
                 <div className="media">
                              <img src={clinci} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h5 className="mt-0">clincc</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                              </div>
                   </div>
                 </div>
                 <div className="Hospital col-lg-5">
                 <div className="media">
                              <img src={Hospital} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h5 className="mt-0"> Hospital</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                              </div>
                 </div>
                 </div>
                 <div className="lab col-lg-5">
                 <div className="media">
                              <img src={lab} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h5 className="mt-0"> lab</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                                   vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                              </div>
                 </div>
                 </div>
                 <div className="pharmcy col-lg-5">
                 <div className="media">
                              <img src={pharmacy} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h5 className="mt-0"> pharmcy</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                              </div>
                 </div>
                 </div>
                
        </div> 
       
        </div>
        </div> 
        <Footer />
 </div> 

  );
  }
}

export default  HomePage;
