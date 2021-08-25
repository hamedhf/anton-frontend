import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
	return(
		<div className='rank-container'>
			<p className='rank-p'>{name + ', your current entry count is ...'}</p>
			<p className='rank-p'>{entries}</p>
		</div>
	);
};

export default Rank;