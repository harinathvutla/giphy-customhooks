import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = tag => {
	const [gif, setGif] = useState('');

	const getGif = async tag => {
		const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
		const imgSrc = data.data.images.downsized_large.url;
		setGif(imgSrc);
	};

	useEffect(() => {
		getGif(tag);
	}, [tag]);

	return [gif, getGif];
};

export default useGif;
