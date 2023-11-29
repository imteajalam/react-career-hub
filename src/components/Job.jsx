import PropTypes from 'prop-types';
import { BiDollarCircle, BiMap } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
  const {id, job_title, logo, company_name, remote_or_onsite, location, job_type, salary } = job;
  return (
    <div className="card text-white shadow-2xl mb-5 lg:m-6">
      <div className="card-body">
        <figure><img src={logo} alt="company" /></figure>
        <h2 className="card-title my-3">{job_title}</h2>
        <p>{company_name}</p>
        <div className="card-actions my-3">
          <div className="badge badge-outline ">{remote_or_onsite}</div>
          <div className="badge badge-outline">{job_type}</div>
        </div>
        <div className="lg:flex lg:my-3">
          <p className='flex items-center lg:text-xl'><BiMap />{location}</p>
          <p className='flex items-center lg:text-xl'><BiDollarCircle />
            {salary}</p>
        </div>
        <Link to={`/job/${id}`}>
          <button className="btn btn-primary w-full lg:w-1/5">Detailes</button>
        </Link>
      </div>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object
};
export default Job;