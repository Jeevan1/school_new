import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import useFetch from "../../custom_hook/useFetch";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import NoData from "../../container/NoData";
import Loader from "../../container/Loader";
const AlbumSingle = ({ sliceValue, sectionTitle, isLanding = false }) => {
  const { loading, data, error } = useFetch({ url: "/albums/" });
  const [currentPage, setCurrentPage] = useState(1);
  let pagePerData = sliceValue;
  // const elementRef = useRef(null);

  const totalPages = Math.ceil(data.length / pagePerData);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const pageData = isLanding
    ? data?.slice(0, sliceValue)
    : data?.slice((currentPage - 1) * pagePerData, currentPage * pagePerData);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="album section__gap">
      <div className="container">
        {sectionTitle && (
          <SectionTitle
            subTitle={"Our Albums"}
            title={"Few Glimps of Prabha Dhamkot "}
          />
        )}
        {!loading && data?.length < 1 && <NoData />}
        <div className="row row-gap-4">
          {pageData?.slice(0, sliceValue).map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <Link to={`/album/${index}`} className="d-block">
                  <div className="album__item">
                    <img src={item.thumbnail} alt={item.title} />

                    <div className="album__item__text">
                      <span className="md_heading">{item.title}</span>
                      <span>{item.description}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        {isLanding && data.length > pagePerData && (
          <div className="d-block text-center mt-4">
            <Link to="/album" className="btn btn__1 ">
              View More
            </Link>
          </div>
        )}
        {!isLanding && data?.length > pagePerData && (
          <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </div>
  );
};

export default AlbumSingle;
