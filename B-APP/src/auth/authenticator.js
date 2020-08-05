import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink ,BrowserRouter, Switch} from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import Budget from '../budget/Budget'
import './authenticator.css';
import fire from '../config/fire'

class authenticator extends Component {

  constructor(props){ 
    super(props);
    this.state ={
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

    authListener(){
      fire.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({user});

        }else{
          this.setState(({user:null}));        }
      });
    }

  render() {
    return (
      
      <BrowserRouter>
      <Router basename="/react-auth-ui/">
        <div className="Authenticator">
        {this.state.user ? (<Link to= '/budget'/>) : (<Link to='/react-auth-ui/'/>)}
          <div className="Authenticator__Aside"></div>
          <div className="Authenticator__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
              <Switch>
              <Route exact path='/budget' component={Budget}>
              </Route>
              <Route path="/sign-up" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
              </Switch>
          </div>

        </div>
     </Router>
     </BrowserRouter>
    );
  }
}

export default authenticator;
