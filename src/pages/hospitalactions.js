import React ,{Component}from 'react';
import '../style/adduser.css'
import SearchPatient from '../pages/SearchPatient ';
import AddSurgy from '../Componentss/addsurgy';
class hosptalblock extends Component {
 render(){
  return (
     <div>
          <div className="asideNav"> 
     <div className="container-fluid">
         <div className="row">
               <div className="col-3 asideNav-list">
                       <div className="nav flex-column nav-pills asideNav-list-linkes" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                           <a className="nav-link" id="v-pills-AddUser-tab" data-toggle="pill" href="#v-pills-AddUser" role="tab" aria-controls="v-pills-AddUser" aria-selected="false">ADD Surgy </a>
                           <a className="nav-link" id="v-pills-Delete_User-tab" data-toggle="pill" href="#v-pills-Delete_User" role="tab" aria-controls="v-pills-Delete_User" aria-selected="false">Search_User</a>
                       </div>
               </div>
               <div className="col-9">
                   <div className="tab-content" id="v-pills-tabContent">
                       <div className="tab-pane fade" id="v-pills-AddUser" role="tabpanel" aria-labelledby="v-pills-AddUser-tab">
                               <AddSurgy /> 
                       </div>
                     
                       <div className="tab-pane fade" id="v-pills-Delete_User" role="tabpanel" aria-labelledby="v-pills-Delete_User-tab">
                                  <SearchPatient />
                       </div>
                   </div>
               </div>
           </div>  

     </div>
   </div>
          
     </div>
  
);
 }
}

export default hosptalblock;
