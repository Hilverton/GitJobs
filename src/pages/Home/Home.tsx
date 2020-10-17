import React, { useEffect, useState } from 'react';

import { Header, Card } from '../../components';

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

    // apiData();
  }, []);

  return (
    <div className='home'>
      <Header />
      <main className='main'>
        {jobs.map((job) => (
          <Card key={job.id} data={job} />
        ))}
      </main>
    </div>
  );
}
