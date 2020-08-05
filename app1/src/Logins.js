import React from 'react';
import './Logins.css'

const Logins = ({logins, deleteLogin}) =>{
       // console.log(this.props);
       const loginList = logins.map(login =>{
           if(login.age<22){
        return(
               <div className="Login" key = {login.id}>
                <div>Name: {login.name}</div>
                <div>Age: {login.age}</div>
                <div>Role: {login.role}</div>
                <div></div>
            <button onClick={() => {deleteLogin(login.id)}}>Delete Log</button>
            
            </div>

        )
           }
           else{
               return null
           }    
 
       })
        return(
         <div className="login-list">
            {loginList}
         </div>

        )
    
}
export default Logins
