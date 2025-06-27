import { Link, useParams } from "react-router-dom";
const Similar = ({ data, heading }) => {
  const currentItem = useParams();
  const filteredBlogItems = data.filter(
    (item) => item.id !== parseInt(currentItem)
  );
  return (
    <div className="aside__box">
      <h5 className="sm_heading">Popular {heading}</h5>
      {filteredBlogItems.slice(0, 3).map((item, index) => {
        return (
          <Link to={`/courses/${index}`} className="mb-3 d-block">
            <div className="aside__box__item" key={index}>
              <div className="image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="title">
                <span className=" fw-semibold">{item.name}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Similar;
