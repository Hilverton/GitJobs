import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { Card, Input, Shimmer } from '../../components';

import './styles.css';

export default function Home() {
  const [jobs, setJobs] = useState<JobsType[]>([]);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  async function apiData() {
    setLoad(true);
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${search}&location=${location}&full_time=${checkbox}`,
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setJobs(data);
    }
    setLoad(false);
  }

  function _onSubmit(e: FormEvent) {
    e.preventDefault();
    setJobs([]);
    apiData();
  }

  useEffect(() => {
    apiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='home'>
      <section className='home__form'>
        <form onSubmit={_onSubmit}>
          <div className='home__form__element'>
            <Input
              icon='fas fa-search'
              placeholder='Filter by title, companies, expertise...'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
            />
          </div>
          <div className='home__form__element'>
            <Input
              icon='fas fa-map-marker-alt'
              placeholder='Filter by location...'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLocation(e.target.value)
              }
            />
          </div>

          <div className='home__form__element home__form__element--last'>
            <div className='home__form__element__wrapper__check'>
              <input onChange={() => setCheckbox(!checkbox)} type='checkbox' />
              <label className='home__form__element__label' htmlFor=''>
                Full time only
              </label>
            </div>
            <button className='home__form__element__button'>Search</button>
          </div>
        </form>
      </section>

      <main className='home__main'>
        {load &&
          Array(6)
            .fill(0)
            .map((cont) => <Shimmer key={cont} />)}
        {jobs.map((job) => (
          <Card key={job.id} data={job} />
        ))}
      </main>
    </div>
  );
}
