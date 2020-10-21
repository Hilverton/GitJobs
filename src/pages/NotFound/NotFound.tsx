import React from 'react';

import notFound from '../../assets/page_not_found.png';

import './styles.css';

export default function NotFound() {
  return (
    <div className='not__found'>
      <img className='not__found__img' src={notFound} alt='Page not found' />
    </div>
  );
}
