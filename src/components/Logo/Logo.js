import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import robot from './robot.svg';

const Logo = () => {
	return(
		<div className="center">
			<Tilt className="Tilt ma4 mt0" options={{ max : 10 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner"> <img src={robot} alt='robot'/> </div>
			</Tilt>
		</div>
	);
};

export default Logo;