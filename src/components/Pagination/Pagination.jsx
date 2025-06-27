import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Pagination = ({ totalPages, onPageChange, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => {
        const nextPage = prevPage + 1;
        onPageChange(nextPage);
        return nextPage;
      });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => {
        const prev = prevPage - 1;
        onPageChange(prev);
        return prev;
      });
    }
  };
  useEffect(() => {
    onPageChange(1);
    setCurrentPage(1);
  }, [data]);

  return (
    <ul className="pagination mt-4 mb-0">
      <li
        className={currentPage === 1 ? "disabled" : ""}
        onClick={handlePrevious}
      >
        <FaArrowLeft />
      </li>
      {[...Array(totalPages)].map((_, index) => (
        <li
          key={index + 1}
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </li>
      ))}
      <li
        className={currentPage === totalPages ? "disabled" : ""}
        onClick={handleNext}
      >
        <FaArrowRight />
      </li>
    </ul>
  );
};

export default Pagination;
