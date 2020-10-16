import React from 'react';

import './styles.css';

export default function Card() {
	return (
		<article className='card'>
			<img
				src='https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube_icon_full-color.svg?cache=f2ec7a5'
				alt='Logo'
			/>
			<main className='card__main'>
				<span className='card__main__info'>5h ago • Full Time</span>
				<h3 className='card__main__job'>Engineering Manager (Front-End)</h3>
				<p className='card__main__company'>Youtube Inc.</p>
			</main>
			<footer>
				<p className='card__footer__location'>Berlin</p>
			</footer>
		</article>
	);
}
