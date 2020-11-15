import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { Card, Input, Shimmer } from '../../components';
import notFound from '../../assets/not_found.png';

import './styles.css';

export default function Home() {
  const [jobs, setJobs] = useState<JobsType[]>([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  async function apiData() {
    let data: JobsType[];
    setLoad(true);
    setError(false);
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${search}&location=${location}&full_time=${checkbox}`,
    );
    if (response.ok) {
      data = await response.json();
      if (data.length === 0) setError(true);
      setJobs(data);
    }
    setLoad(false);
  }

  function _onSubmit(e: FormEvent) {
    e.preventDefault();
    setJobs([]);
    apiData();
  }
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                Full time
              </label>
            </div>
            <button className='home__form__element__button'>Search</button>
          </div>
        </form>
      </section>
      {error && (
        <>
          <img className='home__error__img' src={notFound} alt='Not Found' />
          <h3 className='home__error__text'>No results found</h3>
        </>
      )}
      <main className='home__main'>
        {load &&
          Array(6)
            .fill(0)
            .map((_, id) => <Shimmer key={id} />)}
        {jobs.map((job) => (
          <Card key={job.id} data={job} />
        ))}
      </main>
      {!load && jobs.length > 0 && (
        <button className='home__button__top' onClick={scrollTop}>
          Top
        </button>
      )}
    </div>
  );
}
