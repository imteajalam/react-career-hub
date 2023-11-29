import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utilities/localstorage";
import JobApplied from "./JobApplieds";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobsFilter = (filter) => {
    if (filter === 'all') {
      setDisplayJobs(appliedJobs)
    }
    else if (filter === 'remote') {
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs)
    }
    else if (filter === 'onsite') {
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs)
    }

  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (storedJobIds.length > 0) {
      const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied)
    }
  }, [jobs]);
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Career Hub | Applied Jobs</title>
      </Helmet>
      <details className="dropdown">
        <summary className="m-1 btn">Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
          <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
          <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
        </ul>
      </details>
      {
        displayJobs.map(job => <JobApplied key={job.id} job={job}></JobApplied>)
      }


    </div>
  );
};

export default AppliedJobs;