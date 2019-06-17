import React ,{Component} from 'react';
import './App.css';
import MainNav from './Nav/MainNav';
import LoginPage from './pages/Login';
import HomePage from './pages/home';
import AdminProfile from './Users/profile';
import LabProfile from './Users/Lab';
import HospitalProfile from './Users/Hospitla';
import PharmcyProfile from './Users/pharmacy';
import {BrowserRouter as Router , Switch ,Redirect, Route} from 'react-router-dom'
import { connect } from 'react-redux';
class App extends Component {
 
  render(){
    const {Auth} = this.props;
    console.log(Auth.USERNAME+" "+Auth.TYPE);
    return (
      <Router>
        <div className="App"> 
                <MainNav /> 
                <Switch>
                      {!Auth.TYPE&&!Auth.USERNAME && <Route path='/' exact component={HomePage} />} 
                      {Auth.USERNAME&&Auth.TYPE==="admin"&& <Redirect from='/login' exact to='/adminrofile' /> }
                      {Auth.USERNAME&&Auth.TYPE==="pharmacy"&& <Redirect from='/login' exact to='/pahrmacyprofile' /> }
                      {Auth.USERNAME&&Auth.TYPE==="Lab"&& <Redirect from='/login' exact to='/labprofile' /> }
                      {Auth.USERNAME&&Auth.TYPE==="hospital"&& <Redirect from='/login' exact to='/hospitalprofile' /> }
                      {!Auth.TYPE&&!Auth.USERNAM &&<Route path='/login' exact component={LoginPage} />}
                      {Auth.USERNAME&&Auth.TYPE==="admin"&& <Route path='/adminrofile' exact component={AdminProfile} />}
                      {Auth.USERNAME&&Auth.TYPE==="Lab"&&<Route path='/labprofile' exact component={LabProfile} />}
                      {Auth.USERNAME&&Auth.TYPE==="hospital"&& <Route path='/hospitalprofile' exact component={HospitalProfile} />}
                      {Auth.USERNAME&&Auth.TYPE==="pharmacy"&&  <Route path='/pahrmacyprofile' exact component={PharmcyProfile} />}
                  </Switch>
          </div>
    </Router>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    Auth:state.AuthUser
  }
} 
export default  connect( mapStateToProps)(App);