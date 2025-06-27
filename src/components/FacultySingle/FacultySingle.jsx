import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import useFetch from "../../custom_hook/useFetch";
import NoData from "../../container/NoData";
import { useRef, useState } from "react";
import Pagination from "../Pagination/Pagination";
import DOMPurify from "dompurify";
const FacultySingle = ({ isLanding, sliceValue = 2 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let pagePerData = sliceValue;
  const elementRef = useRef(null);

  const { loading, data, error } = useFetch({ url: "/courses/" });
  const totalPages = Math.ceil(data.length / pagePerData);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const pageData = data?.slice(
    (currentPage - 1) * pagePerData,
    currentPage * pagePerData
  );

  return (
    <div className="faculty__two section__gap" ref={elementRef}>
      <div className="container">
        <SectionTitle subTitle={"Our Courses"} title={"Explore Our Programs"} />
        {!loading && data?.length < 1 && <NoData />}
        <div className="row row-gap-50">
          {pageData?.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6  col-12" key={index}>
                <div className="faculty__two__item">
                  <div className="faculty__two__image">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="faculty__two__text">
                    <Link
                      to={`/courses/${index}`}
                      className={"sm_heading text-center d-block"}
                    >
                      {item.name}
                    </Link>
                    <div
                      className="faculty__desc mb-3"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.description),
                      }}
                    />
                  </div>

                  <div className="faculty__two__btn">
                    <Link
                      to={`/courses/${index}`}
                      state={{ id: 1 }}
                      className="btn btn__2"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {isLanding && data.length > pagePerData && (
          <div className="mt-5">
            <Pagination
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultySingle;
