import React, { useEffect, useState } from 'react';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import './styles.css';

export default function Detail({
  match,
  location,
}: RouteComponentProps<DetailsParams, StaticContext, DetailsLocation>) {
  const [job, setJob] = useState<JobsType>();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${match.params.id}.json`,
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setJob(data);
      }
    }

    if (location.state.job) setJob(location.state.job);
    else getData();
  }, [match.params.id, location.state.job]);

  function cleanUrl(url: string) {
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
  }

  function htmlDescription() {
    return {
      __html: job?.description || '',
    };
  }

  function htmlApply() {
    return {
      __html: job?.how_to_apply || '',
    };
  }

  return (
    <div className='detail'>
      <header className='detail__header'>
        <img
          className='detail__header__img'
          src={job?.company_logo}
          alt='Companie Logo'
        />
        <div className='detail__header__info'>
          <div>
            <h1 className='detail__header__info__title'>{job?.company}</h1>
            <p className='detail__header__info__company'>
              {cleanUrl(job?.company_url || '')}
            </p>
          </div>
          <a
            className='detail__header__info__btn'
            href={job?.company_url}
            target='_blank'
            rel='noopener noreferrer'
          >
            Company Site
          </a>
        </div>
      </header>
      <main className='detail__main'>
        <header className='detail__main__header'>
          <div>
            <span className='detail__main__info'>5h ago • {job?.type}</span>

            <h3 className='detail__main__job'>{job?.title}</h3>

            <p className='detail__main__location'>{job?.location}</p>
          </div>
        </header>
        <section
          className='detail__main__description'
          dangerouslySetInnerHTML={htmlDescription()}
        ></section>
      </main>
      <section className='detail__how__apply'>
        <h1>How to Apply</h1>
        <div dangerouslySetInnerHTML={htmlApply()}></div>
      </section>

      <footer className='detail__footer'>
        <div className='detaill__footer__content'>
          <div>
            <h1 className='detaill__footer__content__job'>{job?.title}</h1>
            <p className='detaill__footer__content__company'>{job?.company}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
