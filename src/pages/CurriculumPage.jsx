import Layout from "../components/Layout/Layout";
import PageBanner from "../components/PageBanner/PageBanner";
import bannerImage from "../assets/img/05.jpg";
import { MdOutlineFileDownload } from "react-icons/md";
import ReportSingle from "../components/ReportSingle/ReportSingle";
import NoData from "../container/NoData";
import Loader from "../container/Loader";
import { useState } from "react";
import useFetch from "../custom_hook/useFetch";

const CurriculumPage = () => {
  const { loading, data, error } = useFetch({
    url: "/downloads/?is_curriculum=true",
  });
  return (
    <main className="main">
      <Layout>
        <PageBanner
          pageTitle={"Our Curriculum"}
          page={"Curriculum"}
          image={bannerImage}
        />
        <div className="curriculum">
          <div className="container">
            {loading && <Loader />}
            {!loading && data?.length < 1 && <NoData />}
            <div className="row row-gap-4">
              {data?.map((item, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <ReportSingle data={item} sliceValue={6} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default CurriculumPage;
