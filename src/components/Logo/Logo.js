import React from 'react';
import Tilt from 'react-tilt';
import robot from './robot.svg';
import './Logo.css';

const Logo = () => {
	return(
		<div className="robot-container">
			<Tilt className="Tilt ma4 mt0" options={{ max : 10 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner"> <img src={robot} alt='robot'/> </div>
			</Tilt>
		</div>
	);
};

export default Logo;