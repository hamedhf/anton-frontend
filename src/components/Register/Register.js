import React from 'react';

const Register = ({onRouteChange}) => {
	return(
		<div className="center sn-container">
		  <form >
		    <p className='si-title'>Register</p>
		    <input type="email" placeholder="Email"/><br/>
		    <input type="password" placeholder="Password"/><br/>
		    <p className='si-register'>Register</p>
		    <p className='si-register' onClick={() => onRouteChange('signin')}>Back</p>
		  </form>
		</div>
	);
};

export default Register;