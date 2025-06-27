import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import PageBanner from "../components/PageBanner/PageBanner";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import useFetch from "../custom_hook/useFetch";
import ReportSingle from "../components/ReportSingle/ReportSingle";
import Loader from "../container/Loader";
import NoData from "../container/NoData";

const ReportsPage = () => {
  const { loading, data, error } = useFetch({
    url: "/downloads/?is_report=true",
  });

  return (
    <Layout>
      <PageBanner pageTitle={"Reports"} page={"Reports"} />
      <div className="reports section__gap">
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
  );
};

export default ReportsPage;
