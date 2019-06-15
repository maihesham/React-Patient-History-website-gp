import React ,{Component}from 'react';
import HosptialForm from '../Componentss/hospitalForm';
import ClinicForm from '../Componentss/addclinic';
import PharmcyForm from '../Componentss/addpharmacy';
import LabForm from '../Componentss/addlab';
import DoctorForm from '../Componentss/addDoctor';
import '../style/adduser.css'
import Navbarcomponents from '../Componentss/navbarcomponent';
class AddUSer extends Component {
 render(){
  return (
    <div>
        <Navbarcomponents />
           <div className="tab-content" id="myTabContent">
             <div className="tab-pane fade show active" id="Hosptial" role="tabpanel" aria-labelledby="Hosptial-tab">
                  < HosptialForm  />
             </div>
             <div className="tab-pane fade" id="Pharmcy" role="tabpanel" aria-labelledby="Pharmcy-tab">
               <PharmcyForm/>
             </div>
             <div className="tab-pane fade" id="clinic" role="tabpanel" aria-labelledby="clinic-tab">.
             <ClinicForm/>
             </div>
             <div className="tab-pane fade" id="lab" role="tabpanel" aria-labelledby="lab-tab">
               <LabForm />
             </div>
             <div className="tab-pane fade" id="Doctor" role="tabpanel" aria-labelledby="Doctor-tab">
                 <div>
                 < DoctorForm/>
                 </div>
                    
               
             </div>
           </div>
        </div>
  
);
 }
}

export default AddUSer;
