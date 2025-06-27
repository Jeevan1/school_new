import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Recent = ({ data, heading, id }) => {
  const [filteredBlogItems, setFilteredBlogItems] = useState([]);
  const [recentFrom, setRecentFrom] = useState("blogs");

  useEffect(() => {
    if (data) {
      if (id) {
        setFilteredBlogItems(data.filter((item) => item.id != id));
      } else {
        setFilteredBlogItems(data);
      }
    }
  }, [data, id]);

  useEffect(() => {
    if (data) {
      if (heading === "Blog") {
        setRecentFrom("blog");
      } else if (heading === "News") {
        setRecentFrom("notices");
      }
    }
  }, [data, heading]);

  return (
    <div className="aside__box">
      <h5 className="sm_heading">Recent {heading}</h5>
      {filteredBlogItems.slice(0, 3).map((item, index) => {
        return (
          <Link
            to={`/${recentFrom}/${item.id}`}
            className="mb-3 d-block"
            key={index}
          >
            <div className="aside__box__item" key={index}>
              <div className="image">
                <img src={item.image || item.thumbnail} alt="" />
              </div>
              <div className="title">
                <span className=" fw-semibold">{item.title}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recent;
