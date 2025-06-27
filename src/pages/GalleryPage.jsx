import { useState } from "react";
import Layout from "../components/Layout/Layout";
import PageBanner from "../components/PageBanner/PageBanner";
import useFetch from "../custom_hook/useFetch";
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination/Pagination";
import { ViewImage } from "../components/ViewImage/ViewImage";

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();
  const { loading, data = [], error } = useFetch({ url: "/albums/" });
  const pagePerData = 8;

  const totalPages = Math.ceil((data[id]?.images.length || 0) / pagePerData);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const pageData = data[id]?.images.slice(
    (currentPage - 1) * pagePerData,
    currentPage * pagePerData
  );

  return (
    <Layout>
      <PageBanner pageTitle={data[id]?.title} page={"Gallery"} />
      <div className="gallery section__gap">
        <div className="container">
          <div className="row">
            {pageData?.map((item, index) => (
              <div className="col-lg-3 col-sm-4 col-6" key={index}>
                <ViewImage img={item.image} title={data[id]?.title} />
              </div>
            ))}
          </div>
          <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
