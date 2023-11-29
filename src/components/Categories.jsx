import Category from "./Category";

const Categories = () => {
  const data = [
    {
      "img": "https://i.ibb.co/60d29nS/accounts.png",
      "title": "Account & Finance",
      "text": "300 Jobs Available"
    },
    {
      "img": "https://i.ibb.co/QcwCJKP/chip.png",
      "title": "Creative Design",
      "text": "100+ Jobs Available"
    },
    {
      "img": "https://i.ibb.co/g6h2sf1/creative.png",
      "title": "Marketing & Sales",
      "text": "150 Jobs Available"
    },
    {
      "img": "https://i.ibb.co/mTR5tTt/marketing.png",
      "title": "Engineering Job",
      "text": "224 Jobs Available"
    }
  ]
  // https://i.ibb.co/60d29nS/accounts.png
  // https://i.ibb.co/dm539Mq/calendar.png
  // https://i.ibb.co/QcwCJKP/chip.png
  // https://i.ibb.co/g6h2sf1/creative.png
  // https://i.ibb.co/mTR5tTt/marketing.png
  return (
    <div>
      <div className="text-center text-white">
        <h1 className="text-center text-4xl lg:text-5xl font-bold">Job Category List</h1>
        <p className="text-center m-7">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:m-10 gap-5">
        {
          data.map((card, idx) => <Category key={idx} card={card}></Category>)
        }
      </div>
    </div>
  );
};

export default Categories;