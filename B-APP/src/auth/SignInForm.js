import React, { Component } from 'react';
import { Link, BrowserRouter, NavLink } from 'react-router-dom';
import fire from '../config/fire';


class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

 //   login(e){
   //   e.preventDefault();
     // fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
      //    }).catch((error)=>{
        //    console.log(error)
          //});
    //}

    handleChange(e) {
            this.setState({[e.target.name]: e.target.value});
    }

    
    handleSubmit(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) =>{
        }).catch((error)=>{
          console.log(error)
        });
    }
   nextPath(path) {
      this.props.history.push(path);
      
    }

  

    render() {
        return (
          <BrowserRouter>
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit} >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <NavLink to='/'>
              <div className="FormField">
                  <button onClick={() => this.nextPath('/')} className="FormField__Button mr-20">Sign In</button> <Link to="/signup" className="FormField__Link">Create an account</Link>
              </div>
              </NavLink>
            </form>
          </div>
          </BrowserRouter>
        );
    }
}

export default SignInForm;
