import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({box, imageUrl}) => {
	return(
		<div className='fr-container'>
			<div>		
				<img src={imageUrl}
			 		 alt=''
			 		 id='inputImage'/>
				<div className='bounding-box' style={{top: box.top, right: box.right, bottom: box.bottom, left: box.left}}></div>
			</div>
	</div>
	);
};

export default FaceRecognition;