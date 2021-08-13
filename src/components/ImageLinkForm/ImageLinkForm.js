import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
	return(
		<div className='tc'>
			<p className='b'>{'Anton will detect faces in your pictures. Give it a try!'}</p>
			<div className="center">
				<div className='bg box'>
					<input className='f4 pa1' type='text'/>
					<button className='grow f4 link ph2 pv1 dib white bg-light-purple'>Detect</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;