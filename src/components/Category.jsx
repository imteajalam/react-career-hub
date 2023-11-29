import PropTypes from 'prop-types';


const Category = ({ card }) => {
  const { title, text, img } = card;
  return (
    <div className="card  text-white shadow-2xl p-8 lg:ml-20">
      <img className='w-20' src={img} alt="" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

Category.propTypes = {
  card: PropTypes.object
};
export default Category;