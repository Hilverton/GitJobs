import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
  return (
    <header className='header'>
      <nav>
        <Link to='/' className='link'>
          <h1>GitJobs</h1>
        </Link>
      </nav>
    </header>
  );
}
