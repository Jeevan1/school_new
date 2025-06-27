import { useEffect, useRef, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

const BatchSingle = ({ data, sliceValue, isLanding }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const students = data.students;
  let pagePerData = 4;
  const totalPages = Math.ceil(students.length / pagePerData);
  const elementRef = useRef(null);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  const pageData = isLanding
    ? students.slice(0, sliceValue)
    : students.slice(
        (currentPage - 1) * pagePerData,
        currentPage * pagePerData
      );

  return (
    <div className="student " ref={elementRef}>
      <div className="container">
        <div className="row">
          {pageData.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-6" key={index}>
              <div className="student__member">
                <div className="student__member__profile">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="student__text">
                  <span>{item.position}</span>
                  <h1 className="sm_heading">{item.name}</h1>
                  <span>{item.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isLanding && (
          <div className="d-block text-center">
            <Link to="/notices" className="btn btn__1 ">
              View More
            </Link>
          </div>
        )}

        <Pagination
          data={data}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BatchSingle;
