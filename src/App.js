import React ,{Component} from 'react';
import './App.css';
import MainNav from './Nav/MainNav';
import Login from './pages/Login';
import HomePage from './pages/home';
import AdminProfile from './Users/profile';
import LabProfile from './Users/Lab';
import HospitalProfile from './Users/Hospitla';
import PharmcyProfile from './Users/pharmacy';
import {BrowserRouter as Router , Switch ,Redirect, Route} from 'react-router-dom'
class App extends Component {
  state={
    type:"Lab"
  }
  render(){
   
    return (
      <Router>
              <div className="App"> 
                <MainNav /> 
                <Switch>
                      <Route path='/' exact component={HomePage} />
                      {this.state.type==="admin"&& <Redirect from='/login' exact to='/adminrofile' /> }
                      {this.state.type==="pharmacy"&& <Redirect from='/login' exact to='/pahrmacyprofile' /> }
                      {this.state.type==="Lab"&& <Redirect from='/login' exact to='/labprofile' /> }
                      {this.state.type==="hospital"&& <Redirect from='/login' exact to='/hospitalprofile' /> }
                      {!this.state.type&&  <Route path='/login' exact component={Login} />}
                      {this.state.type==="admin"&& <Route path='/adminrofile' exact component={AdminProfile} />}
                      {this.state.type==="Lab"&&<Route path='/labprofile' exact component={LabProfile} />}
                      {this.state.type==="hospital"&& <Route path='/hospitalprofile' exact component={HospitalProfile} />}
                      {this.state.type==="pharmacy"&&  <Route path='/pahrmacyprofile' exact component={PharmcyProfile} />}
                  </Switch>
          </div>
    </Router>
    );
  }
}

export default App;