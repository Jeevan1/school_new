import { useEffect, useRef, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { FaDotCircle } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { downloadFileFromUrl } from "../../../helper";

const ReportSingle = ({ data, sliceValue, isLanding }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reports = data?.categories;
  let pagePerData = 6;
  const totalPages = Math.ceil(reports?.length / pagePerData);
  const elementRef = useRef(null);
  data && console.log(data);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const pageData = isLanding
    ? reports?.slice(0, sliceValue)
    : reports?.slice(
        (currentPage - 1) * pagePerData,
        currentPage * pagePerData
      );

  return (
    <div className="reports__section" ref={elementRef}>
      <div className="w-full ">
        <p className="heading">{data?.name}</p>
        <div className="reports__container">
          <div className=" d-flex flex-column align-items-start">
            {pageData?.map((item, index) => (
              <p className="reports__item d-flex align-items-center gap-1">
                <FaDotCircle size={10} />
                <span className="ps-1">{item?.title} </span>
                {item?.attachment && (
                  <button
                    className="border-0 d-flex"
                    onClick={() =>
                      downloadFileFromUrl(item?.attachment, item?.title)
                    }
                  >
                    <MdOutlineFileDownload className="text-primary" />
                  </button>
                )}
              </p>
            ))}
          </div>
          {data && (
            <Pagination
              data={data}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportSingle;
