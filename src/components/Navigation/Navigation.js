import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange}) => {
	return(
		<nav className='nav'>
			<p onClick={() => onRouteChange('signin')} className='sign-out'>Sign Out</p>
		</nav>
	);
};

export default Navigation;