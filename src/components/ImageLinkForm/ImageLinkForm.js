import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
	return(
		<div className='ilf-outer'>
			<p className='ilf-p'>{'Anton will detect faces in your pictures. Give it a try!'}</p>
			<div className='ilf-inner ilf-bg'>
					<input className='ilf-input' type='text'/>
					<button className="ilf-btn glow-on-hover"><span>Detect </span></button>
			</div>
		</div>
	);
};

export default ImageLinkForm;