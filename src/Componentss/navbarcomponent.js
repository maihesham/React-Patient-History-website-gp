import React ,{Component}from 'react';
import pharmacy1 from '../icons/medicine.png';
import Hospital1 from '../icons/ambulance.png';
import lab1 from '../icons/microscope.png';
import clinci1 from '../icons/nurse.png';
import Doctor1 from '../icons/doctor.png';
class navbarcomponents extends Component{
   render(){
    return(
      <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
              <img src={Hospital1} alt="" />
                <a className="nav-link " id="Hosptial-tab" data-toggle="tab" href="#Hosptial" role="tab" aria-controls="Hosptial" aria-selected="true"> Hosptial</a>
              </li>
              <li className="nav-item">
              <img src={ pharmacy1}  alt=""/>
                <a className="nav-link" id="Pharmcy-tab" data-toggle="tab" href="#Pharmcy" role="tab" aria-controls="Pharmcy" aria-selected="false">Pharmcy</a>
              </li>
              <li className="nav-item">
              <img src={clinci1}  alt=""/>
                <a className="nav-link" id="clinic-tab" data-toggle="tab" href="#clinic" role="tab" aria-controls="contact" aria-selected="false">clinic</a>
              </li>
              <li className="nav-item">
              <img src={ lab1} alt="" />
                <a className="nav-link" id="lab-tab" data-toggle="tab" href="#lab" role="tab" aria-controls="lab" aria-selected="false">lab</a>
              </li>
              <li className="nav-item">
              <img src={Doctor1} alt="" />
                <a className="nav-link" id="Doctor-tab" data-toggle="tab" href="#Doctor" role="tab" aria-controls="Doctor" aria-selected="false">Doctor</a>
              </li>
            </ul>
  );
   }
}
export default navbarcomponents;