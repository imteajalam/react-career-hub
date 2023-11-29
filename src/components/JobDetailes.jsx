import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../Utilities/localstorage";
import { Helmet } from "react-helmet-async";



const JobDetailes = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id)
  const job = jobs.find(job => job.id === idInt)
  const
    { job_title, contact_information, job_description, salary, job_responsibility, educational_requirements, experiences
    } = job;
  console.log(id, job)

  const handleApplyJob = () => {
    saveJobApplication(idInt);
  }



  return (
    <div className="text-white lg:container mx-auto my-2 mb-40">
      <Helmet>
        <title>Career Hub | Job Detailes</title>
      </Helmet>
      <div className="text-center font-bold text-3xl p-10 lg:p-28">Job Detailes</div>
      <div className="lg:flex mx-9">
        <div className="lg:w-2/3">

          <p className="py-6 leading-8"><span className="font-bold">Job Description: </span> {job_description} </p>
          <p className="py-6 leading-8"><span className="font-bold">Job Responsibility: </span> {job_responsibility
          }</p>
          <p className="py-6 leading-8"><span className="font-bold">Educational Requirements: </span><br /> {educational_requirements}</p>
          <p className="py-6 leading-8"><span className="font-bold">Experiences: </span><br /> {experiences}</p>
        </div>
        <div className="card shadow-2xl p-5  lg:ml-16">
          <h3 className="font-bold text-xl py-4">Job Detailes</h3>
          <hr />
          <p className="text-xl mt-8"><span className="font-bold">Salary :</span> {salary}</p>
          <p className="text-xl py-1"><span className="font-bold">Job Title :</span> {job_title}</p>
          <h4 className="py-6 font-bold text-xl">Contact Information</h4>
          <hr />
          <p className="text-xl mt-8"><span className="font-bold">Phone :</span> {contact_information.phone}</p>
          <p className="text-xl py-1"><span className="font-bold">Email :</span> {contact_information.email}</p>
          <p className="text-xl py-1"><span className="font-bold">Address :</span> {contact_information.address}</p>
          <Link><button
            onClick={handleApplyJob}
            className="btn btn-primary w-full mt-10"
          >Apply Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetailes;