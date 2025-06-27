import { useEffect, useState } from "react";
import Recent from "../components/Aside/Recent";
import DetailSingle from "../components/DetailSingle/DetailSingle";
import Layout from "../components/Layout/Layout";
import PageBanner from "../components/PageBanner/PageBanner";
import useFetch from "../custom_hook/useFetch";
import { useParams } from "react-router-dom";
import Similar from "../components/Aside/Similar";
import DOMPurify from "dompurify";
import { ViewImage } from "../components/ViewImage/ViewImage";

const NewsDetailsPage = ({}) => {
  const [notice, setNotice] = useState({});
  const { id } = useParams();
  const { loading, data, error } = useFetch({ url: "/notices/", isSort: true });
  useEffect(() => {
    if (data) {
      const filteredNotice = data.find((item) => item.id == id);

      if (filteredNotice) {
        setNotice(filteredNotice);
      }
    }
  }, [id, data]);

  return (
    <Layout>
      <PageBanner pageTitle={"News Detail"} page={"News Detail"} />
      {notice && (
        <div className="notice__detail section__gap mb-60">
          <div className="container">
            <div className="row gap-3 gap-md-0">
              <div className="col-lg-9 col-12">
                <div className="notice__detail__header">
                  <h1 className="md_heading">{notice.title}</h1>
                  {notice.uploaded_date && (
                    <div className="notice__info">
                      <span className="date">{notice.uploaded_date}</span>
                    </div>
                  )}
                </div>
                <div className="notice__detail__text">
                  <ViewImage img={notice.image} title={notice.title} />

                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(notice.description),
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <aside className="aside">
                  <Recent data={data} id={id} heading={"News"} />
                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default NewsDetailsPage;
