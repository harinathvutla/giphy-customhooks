import React, { useState } from 'react';
import useGif from '../useGif';

const RandomGifByTag = () => {
	const [tag, setTag] = useState('dance');
	const [gif, getGif] = useGif();

	const handleClick = () => {
		getGif(tag);
	};

	return (
		<div className='container'>
			<h1>Random {tag} Gif</h1>
			<img width='500' src={gif} alt='Random Gif' />
			<input value={tag} onChange={e => setTag(e.target.value)} />
			<button onClick={handleClick}>CLICK FOR NEW</button>
		</div>
	);
};

export default RandomGifByTag;
