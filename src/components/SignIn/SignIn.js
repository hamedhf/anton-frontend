import React from 'react';
import './SignIn.css';

const SignIn = ({onRouteChange}) => {
	return(
		<div className="center sn-container">
		  <form >
		    <p>Welcome</p>
		    <input type="email" placeholder="Email"/><br/>
		    <input type="password" placeholder="Password"/><br/>
		    <input type="button" value="Sign in" onClick={onRouteChange}/><br/>
		    <a href="www.google.com">Register</a>
		  </form>
		</div>
	);
};

export default SignIn;