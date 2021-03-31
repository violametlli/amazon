 import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
 
 function Login() {
     return (
         <div className='login'>
             <Link to ="/">
             <img className="login__logo" src="https://www.nysenate.gov/sites/default/
             files/press-release/main-image/amazon.jpg"/>
             </Link>
         </div>
     )
 }
 
 export default Login
 