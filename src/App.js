import React from 'react';

import RandomGif from './components/RandomGif';
import RandomGifByTag from './components/RandomGifByTag';

import './App.css';

function App() {
	return (
		<div>
			<h1>Random GIF Application</h1>
			<div className='main-container'>
				<RandomGif />
				<RandomGifByTag />
			</div>
		</div>
	);
}

export default App;
