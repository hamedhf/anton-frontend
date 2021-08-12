import React from 'react';

const ImageLinkForm = () => {
	return(
		<div className='tc'>
			<p className='b'>{'Anton will detect faces in your pictures. Give it a try!'}</p>
			<input className='f4 pa1 w-40' type='text'/>
			<button className='w-10 grow f4 link ph2 pv1 dib white bg-light-purple'>Detect</button>
		</div>
	);
};

export default ImageLinkForm;