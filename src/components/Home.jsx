import { Helmet } from 'react-helmet-async';
import Person from '../../public/images/user.png'
import Categories from './Categories';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
  return (
    <div className="lg:container lg:mx-auto mx-8">
      <Helmet> <title>Career Hub | Home</title></Helmet>
      <div className=" static my-20 lg:flex">
        <div className='my-32'>

          <h1 className="text-5xl font-bold text-white leading-snug">One Step <br /> Closer To Your <br /><span className="text-blue-500">Dream Job</span></h1>

          <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

          <button className='btn btn-primary my-10'>Get Started</button>
        </div>
        <div className='m-0'>
          <img className="mr-0 hidden lg:flex" src={Person} alt="" />
        </div>

      </div>
      <Categories></Categories>
      <FeaturedJobs></FeaturedJobs>

    </div>
  );
};

export default Home;