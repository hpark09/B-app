import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () =>
{
    

    return(
        <ul className = "navbar-right">
            <li><NavLink to='/react-auth-ui/' className="text-white">Log Out</NavLink></li>
            <li><NavLink to='/' className="text-white">HJ</NavLink></li>


        </ul>
    )
}
export default SignedInLinks