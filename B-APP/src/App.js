import React, { Component } from 'react';
import Budget from './budget/Budget';
import { BudgetProvider } from './store';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import authenticator from './auth/authenticator';
import fire from './config/fire';

class App extends Component {
 


  render() {
    return (

      <BrowserRouter>
      <BudgetProvider>
        <div className="App">
        <Switch>
        <Route exact path ='/' component ={Budget}/>
        <Route  path='/react-auth-ui/' component={authenticator}/>
       </Switch>
        </div>
      </BudgetProvider>
      </BrowserRouter>
    );
  }
}

export default App;

