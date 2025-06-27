import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import useFetch from "../../custom_hook/useFetch";
import NoData from "../../container/NoData";
import { useRef, useState } from "react";
import Pagination from "../Pagination/Pagination";
import DOMPurify from "dompurify";
const FacilitySingle = ({ isLanding = true, sliceValue = 1 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let pagePerData = sliceValue;
  const elementRef = useRef(null);

  const { loading, data, error } = useFetch({ url: "/facilities/" });
  const totalPages = Math.ceil(data.length / pagePerData);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const pageData = data?.slice(
    (currentPage - 1) * pagePerData,
    currentPage * pagePerData
  );

  return (
    <section className="facility section__gap" ref={elementRef}>
      <div className="container">
        <SectionTitle
          subTitle={"Our Facility"}
          title={"Why Prabha Dhamkot ?"}
        />
        <div className="row row-gap-30">
          {!loading && data?.length < 1 && <NoData />}
          {pageData?.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="facility__item">
                  <div className="facility__item__icon">
                    <img src={item.image} alt="" />
                  </div>
                  <Link to={"/"} className="sm_heading ">
                    {item.name}
                  </Link>

                  <div className="facility__brief">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.description),
                      }}
                    />
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
    </section>
  );
};

export default FacilitySingle;
