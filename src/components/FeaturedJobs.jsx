import { useEffect, useState } from 'react';
import Job from './Job';

const FeaturedJobs = () => {

  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data))
  }
    , [])

  return (
    <div>
      <div className="text-center text-white mt-28">
        <h1 className="text-center text-4xl lg:text-5xl font-bold">Featured Jobs</h1>
        <p className="text-center m-7">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1'>
        {
          jobs?.slice(0, dataLength)?.map((job) => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={`text-center lg:m-10 ${dataLength === jobs.length ? 'hidden' : ''}`}>
        <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary lg:w-auto w-full">
          All Jobs
        </button>
      </div>

    </div>
  );
};

export default FeaturedJobs;