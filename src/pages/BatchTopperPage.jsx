import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import PageBanner from "../components/PageBanner/PageBanner";
import BatchSingle from "../components/BatchSingle/BatchSingle";
import useFetch from "../custom_hook/useFetch";
import NoData from "../container/NoData";
const BatchTopperPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { loading, data, error } = useFetch({ url: "/campusbatches/" });

  useEffect(() => {
    setActiveIndex(0);
  }, [data]);

  return (
    <Layout>
      <PageBanner pageTitle={"Campus Batch"} page={"batch"} />
      <div className="container section__gap pb-100">
        <div className="row">
          <div className="col-md-3 col-12 mb-5">
            <span className=" sm_heading d-block text-center text-md-start">
              Campus Batch
            </span>
            {!loading && data?.length < 1 && <NoData />}
            <div className="d-flex justify-content-center justify-content-md-start flex-wrap gap-2 mt-4">
              {data?.map((item, index) => {
                return (
                  <button
                    className={` btn btn-outline-dark ${
                      activeIndex === index ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="row row-gap-4 mb-5 mb-lg-0">
              {data[activeIndex] && (
                <BatchSingle data={data[activeIndex]} sliceValue={4} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BatchTopperPage;
