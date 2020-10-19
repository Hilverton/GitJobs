import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Card({ data }: CardProps) {
  return (
    <Link to={`/detail/${data.id}`} className='link'>
      <article className='card'>
        <img
          src={
            data.company_logo ||
            'https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube_icon_full-color.svg?cache=f2ec7a5'
          }
          alt='Logo'
        />
        <main className='card__main'>
          <span className='card__main__info'>5h ago • {data.type}</span>

          <h3 className='card__main__job'>
            {data.title.length > 30
              ? `${data.title.slice(0, 30)}...`
              : data.title}
          </h3>

          <p className='card__main__company'>{data.company}</p>
        </main>
        <footer>
          <p className='card__footer__location'>
            {data.location.length > 35
              ? `${data.location.slice(0, 35)}...`
              : data.location}
          </p>
        </footer>
      </article>
    </Link>
  );
}
