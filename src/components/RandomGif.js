import React from 'react';
import useGif from '../useGif';

const RandomGif = () => {
	const [gif, getGif] = useGif('');

	const handleClick = () => {
		getGif();
	};

	return (
		<div className='container'>
			<h1>Random Gif</h1>
			<img width='500' src={gif} alt='Random Gif' />
			<button onClick={handleClick}>CLICK FOR NEW</button>
		</div>
	);
};

export default RandomGif;
