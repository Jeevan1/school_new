import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect, useRef, useState } from "react";
import useFetch from "../../custom_hook/useFetch";
import NoData from "../../container/NoData";
import { downloadFileFromUrl, formatDateTime } from "../../../helper";
import DOMPurify from "dompurify";
import { MdOutlineFileDownload } from "react-icons/md";
const Reports = ({ sectionTitle, sliceValue, pagination, isLanding }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let pagePerData = sliceValue;
  const elementRef = useRef(null);
  const { loading, data, error } = useFetch({
    url: "/downloads/?is_report=true",
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

  console.log("pageData", pageData);

  return (
    <div className={`reports section__gap`} ref={elementRef}>
      <div className="container">
        {sectionTitle ? (
          <SectionTitle
            subTitle={"Reports"}
            title={"Regular updates about Campus Activities"}
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
                    {/* <img src={bannerImage} alt="img" className="" /> */}
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

export default Reports;
