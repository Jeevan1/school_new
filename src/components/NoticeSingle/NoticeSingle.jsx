import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect, useRef, useState } from "react";
import useFetch from "../../custom_hook/useFetch";
import NoData from "../../container/NoData";
import { formatDateTime } from "../../../helper";
import { MdOutlineFileDownload } from "react-icons/md";
const NoticeSingle = ({ sectionTitle, sliceValue, pagination, isLanding }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let pagePerData = sliceValue;
  const elementRef = useRef(null);
  const { loading, data, error } = useFetch({
    url: "/downloads/?is_notice=true",
    isSort: true,
  });
  const totalPages = Math.ceil(data.length / pagePerData);

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
    ? data?.slice(0, sliceValue)
    : data?.slice((currentPage - 1) * pagePerData, currentPage * pagePerData);

  return (
    <div className={`notice section__gap`} ref={elementRef}>
      <div className="container">
        {sectionTitle ? (
          <SectionTitle
            subTitle={"News and Notices"}
            title={"Regular updates about School Activities"}
          />
        ) : (
          ""
        )}
        {!loading && data?.length < 1 && <NoData />}
        <div className="row row-gap-4">
          {pageData[0]?.categories?.map((item, index) => {
            const date = formatDateTime(item?.created_at);

            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="">
                  <div className="w-full reports__card">
                    <p className="heading">{item.title}</p>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        onClick={() =>
                          downloadFileFromUrl(item?.attachment, item.title)
                        }
                      >
                        Downloads <MdOutlineFileDownload />
                      </button>
                      <span>|</span>
                      <span className="date">{date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {isLanding && data.length > pagePerData && (
          <div className="d-block text-center mt-4">
            <Link to="/notices" className="btn btn__1 ">
              View More
            </Link>
          </div>
        )}

        {!isLanding && pagination && (
          <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </div>
  );
};

export default NoticeSingle;
