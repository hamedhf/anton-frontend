import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl}) => {
	return(
		<div className='fr-container'>
			<img src={imageUrl}
			 		 alt=''/>
		</div>
	);
};

export default FaceRecognition;