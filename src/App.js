import React ,{Component} from 'react';
import './App.css';
import MainNav from './Nav/MainNav';
import Login from './pages/Login';
import HomePage from './pages/home';
import AdminProfile from './Users/profile';
import LabProfile from './Users/Lab';
import HospitalProfile from './Users/Hospitla';
import PharmcyProfile from './Users/pharmacy';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
class App extends Component {
  render(){
    return (
      <Router>
          <div className="App">
            <MainNav />
              <Switch>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/login' component={Login} />
                  <Route path='/adminrofile' component={AdminProfile} />
                  <Route path='/labprofile' component={LabProfile} />
                  <Route path='/hospitalprofile' component={HospitalProfile} />
                  <Route path='/pahrmacyprofile' component={PharmcyProfile} />
              </Switch>
    </div>
    </Router>
    );
  }
}

export default App;
