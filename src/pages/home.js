import React ,{Component} from 'react';
import pharmacy from '../icons/medicine.png';
import Hospital from '../icons/ambulance.png';
import lab from '../icons/microscope.png';
import clinci from '../icons/nurse.png';
import Doctor from '../icons/doctor.png';
import AndeoideApp from '../icons/anpng.png';
import logo from '../icons/exam.png';
import MainNav from '../Nav/MAinNavEmpty';
import '../style/home.css';
import Footer from '../Nav/footer';
class HomePage extends Component {
  render(){
    return (
    
      <div>
            <MainNav /> 
        <div className="content">
          
         <div className="container"> 
          
             <div className="row">
                 <div className="intro col-md-12">
                             <div className="media">
                              <img src={logo} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h2> Patient History  app and web-site</h2>
                                <p>main purpose is to ease communication between doctor and patient</p>
                                <p> AndeoideApp removes any unnecessary mileage from the patients’ answers to the doctors’ questions by giving the doctors access to the patients’ medical history and data.</p>
                                <p> Our main platform is an android application. In addition, we will create a web application that supports multiple user types.</p>
                              </div>
                            </div>
                 </div>
                 </div>
                <div className="row hasAllUsers"> 
                <div className="androideApp col-lg-5">
                         <div className="media">
                               <img src={AndeoideApp} alt="Logo" className="align-self-start mr-3" />
                               <div className="media-body">
                                 <h5 className="mt-0">AndroideApp</h5>
                                 <p>include Doctor ,  Patient , clinic </p>
                                 <h5 className="mt-0">Patient</h5>
                                 <p>just download App  , save your medical information in our app , no papers again  </p>
                                 <p>To protect the your privacy and protect their data, you have to approve the doctor's’ request to access their data.</p>
                               </div>
                             </div>
                  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                 <div className="Doctor col-lg-5">
                 <div className="media">
                              <img src={Doctor} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h5 className="mt-0">Doctor</h5>
                                <p>can keep in contact with their patients using our app </p>
                                <p>manage dates in each clinic </p>
                              </div>
                   </div>
                 </div>
                 <div className="clinic col-lg-5">
                 <div className="media">
                              <img src={clinci} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h5 className="mt-0"> Clinic</h5>
                                <p>user login in system as clinic Can Add , Update and Delete appointment to this clinic</p>
                              </div>
                   </div>
                 </div>
                 <div className="Hospital col-lg-5">
                 <div className="media">
                              <img src={Hospital} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h5 className="mt-0"> Hospital</h5>
                                <p>Hospital can show Urgent patient information using public ip associated to patient id</p>
                              </div>
                 </div>
                 </div>
                 <div className="lab col-lg-5">
                 <div className="media">
                              <img src={lab} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h5 className="mt-0"> Lab</h5>
                                <p>can add medical tests by idpublic to patient</p>
                              </div>
                 </div>
                 </div>
                 <div className="pharmcy col-lg-5">
                 <div className="media">
                              <img src={pharmacy} alt="Logo" className="align-self-start mr-3" />
                              <div className="media-body">
                                <h5 className="mt-0"> pharmcy</h5>
                                <p>comment in medicine list if has any conflict</p>
                                <p>after a certain number of reviews pharmacy allowed to show ads </p>
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
