import React, { useEffect, useState } from 'react';

import { Header, Card, Input } from '../../components';

import './styles.css';

export default function Home() {
  const [jobs, setJobs] = useState<JobsType[]>([]);

  useEffect(() => {
    async function apiData() {
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=javascript',
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setJobs(data);
      }
    }

    apiData();
  }, []);

  return (
    <div className='home'>
      <Header />

      <section className='home__form'>
        <form>
          <div className='home__form__element'>
            <Input
              icon='fas fa-search'
              placeholder='Filter by title, companies, expertise...'
            />
          </div>
          <div className='home__form__element'>
            <Input
              icon='fas fa-map-marker-alt'
              placeholder='Filter by location...'
            />
          </div>

          <div className='home__form__element home__form__element--last'>
            <div className='home__form__element__wrapper__check'>
              <input type='checkbox' />
              <label className='home__form__element__label' htmlFor=''>
                Full time only
              </label>
            </div>
            <button className='home__form__element__button'>Search</button>
          </div>
        </form>
      </section>

      <main className='home__main'>
        {jobs.map((job) => (
          <Card key={job.id} data={job} />
        ))}
      </main>
    </div>
  );
}
