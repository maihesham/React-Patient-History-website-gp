import React ,{Component} from 'react';
import './App.css';
import LoginPage from './pages/Login';
import HomePage from './pages/home';
import {BrowserRouter as Router , Switch ,Redirect, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import userHomePAge from './userHome';
import Logout from './Logout'
class App extends Component {
 
  render(){
    const {Auth} = this.props;
    console.log(Auth.USERNAME+" "+Auth.TYPE);
    {Auth.TYPE && setTimeout(<Redirect from='/userhomepage' exact to='/login' />,1000)} 

    return (
      <Router>
        <div className="App"> 
                <Switch>
                       <Route path='/logout' exact component={Logout} />
                       <Redirect from='/logout' exact to='/login' />
                      {!Auth.TYPE&&!Auth.USERNAME && <Route path='/' exact component={HomePage} />}
                      {!Auth.TYPE&&!Auth.USERNAME && <Redirect from='/userhomepage' exact to='/login'  />} 
                      {Auth.USERNAME&&Auth.TYPE&& <Redirect from='/login' exact to="/userhomepage" /> }
                      {!Auth.TYPE&&!Auth.USERNAM &&<Route path='/login' exact component={LoginPage} />}                     
                      {Auth.USERNAME&&Auth.TYPE&& <Route path="/userhomepage" exact component={userHomePAge} />}
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