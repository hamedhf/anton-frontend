import React from 'react';
import './SignIn.css';

const SignIn = ({onRouteChange}) => {
	return(
		<div className="center sn-container">
		  <form >
		    <p className='si-title'>Welcome</p>
		    <input type="email" placeholder="Email"/><br/>
		    <input type="password" placeholder="Password"/><br/>
		    <input type="button" value="Sign in" onClick={() => onRouteChange('home')}/><br/>
		    <p className='si-register' onClick={() => onRouteChange('register')}>Register</p>
		  </form>
		</div>
	);
};

export default SignIn;