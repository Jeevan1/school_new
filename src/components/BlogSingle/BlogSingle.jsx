import SectionTitle from "../SectionTitle/SectionTitle";

import { Link } from "react-router-dom";

import Pagination from "../Pagination/Pagination";
import { useEffect, useRef, useState } from "react";
import useFetch from "../../custom_hook/useFetch";
import NoData from "../../container/NoData";
import { formatDateTime } from "../../../helper";

const BlogSingle = ({ sectionTitle, sliceValue, pagination, isLanding }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let pagePerData = sliceValue;
  const elementRef = useRef(null);

  const { loading, data, error } = useFetch({ url: "/blogs/", isSort: true });

  const totalPages = Math.ceil(data.length / pagePerData);

  const handlePageChange = (newPage) => {
    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    setCurrentPage(newPage);
  };

  const pageData = isLanding
    ? data?.slice(0, sliceValue)
    : data?.slice((currentPage - 1) * pagePerData, currentPage * pagePerData);

  return (
    <div className={`blog ${isLanding ? "section__gap" : ""}`} ref={elementRef}>
      <div className="container">
        {sectionTitle && (
          <SectionTitle
            subTitle={"Our Blogs"}
            title={"School insights and ideas"}
          />
        )}
        {!loading && data?.length < 1 && <NoData />}
        <div className="row row-gap-4">
          {pageData.map((item, index) => {
            const date = formatDateTime(item.updated_at);
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <Link to={`/blog/${item.id}`} className="p-0 m-0 w-100">
                  <div className="blog__image">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <span to={`/blog/${item.id}`} className="sm_heading">
                    {item.title}
                  </span>
                </Link>
                <div className="blog__info">
                  <span className="date">{date}</span>
                </div>
              </div>
            );
          })}
        </div>
        {isLanding && data.length > pagePerData && (
          <div className="text-center mt-4">
            <Link to="/blog" className="btn  btn__1">
              View More
            </Link>
          </div>
        )}
        {!isLanding && pagination && data.length > pagePerData && (
          <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </div>
  );
};

export default BlogSingle;
