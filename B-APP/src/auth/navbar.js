import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-dark">
                <div className="container">
                    <Link to='/' className="text-white"><h1>Budget Tracker App</h1></Link>
                    <SignedInLinks/>
                </div>
            </nav>
        )
    }
}

export default Navbar