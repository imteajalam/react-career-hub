import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const JobApplied = ({ job }) => {
  const { logo, job_title, remote_or_onsite, job_type, salary, company_name, location } = job;
  return (
    <div className="card lg:card-side bg-base-100 p-5 shadow-2xl m-5">
      <figure><img src={logo} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <h3>{company_name}</h3>
        <div className="flex">
          <div className="badge badge-outline ">{job_type}</div>
          <div className="badge badge-outline ">{remote_or_onsite}</div>
        </div>
        <div className="lg:flex ">
          <p className="text-xl"><span className="font-bold">Salary :</span> {salary}</p>
          <p className="text-xl"><span className="font-bold">Location :</span> {location}</p>
        </div>
        <Link to="/jobdetailes">
          <div className="card-actions justify-end">
            <button className="btn btn-primary lg:w-auto w-full">View More</button>
          </div>
        </Link>
      </div>
    </div>
  );
};
JobApplied.propTypes = {
  job: PropTypes.object
};

export default JobApplied;