import React from 'react';
import { Link } from 'react-router-dom';

import { GetTime } from '../../utils';
import noImage from '../../assets/no_image.png';

import './styles.css';

export default function Card({ data }: CardProps) {
  return (
    <Link
      to={{
        pathname: `/detail/${data.id}`,
        state: {
          job: data,
        },
      }}
      className='link'
    >
      <article className='card'>
        <img src={data.company_logo || noImage} alt='Logo' />
        <main className='card__main'>
          <span className='card__main__info'>
            {GetTime(data.created_at)} • {data.type}
          </span>

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
