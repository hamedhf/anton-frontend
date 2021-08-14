import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
	return(
		<div className='ilf-outer'>
			<p className='ilf-p'>{'Anton will detect faces in your pictures. Give it a try!'}</p>
			<div className='ilf-inner ilf-bg'>
					<input className='ilf-input' type='text' onChange={onInputChange}/>
					<button className="ilf-btn glow-on-hover" onClick={onSubmit}><span>Detect </span></button>
			</div>
		</div>
	);
};

export default ImageLinkForm;