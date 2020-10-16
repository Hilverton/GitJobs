import React from 'react';

import { Header, Card } from '../../components';

import './styles.css';

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<main className='main'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</main>
		</div>
	);
}
