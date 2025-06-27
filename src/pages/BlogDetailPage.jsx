import { useEffect, useState } from "react";
import Recent from "../components/Aside/Recent";
import DetailSingle from "../components/DetailSingle/DetailSingle";
import Layout from "../components/Layout/Layout";
import PageBanner from "../components/PageBanner/PageBanner";
import useFetch from "../custom_hook/useFetch";
import { useParams } from "react-router-dom";

const ProgramDetailPage = ({}) => {
  const [course, setCourse] = useState([]);
  const { id } = useParams();

  const { loading, data, error } = useFetch({ url: "/blogs/", isSort: true });

  useEffect(() => {
    if (data) {
      const filteredCourse = data.find((item) => item.id == id);

      if (filteredCourse) {
        setCourse(filteredCourse);
      }
    }
  }, [id, data]);

  return (
    <Layout>
      <PageBanner pageTitle={"Blog Detail"} page={"Blog Detail"} />
      <div className="blog__detail section__gap mb-100">
        <div className="container">
          <div className="row gap-3 gap-md-0">
            <div className="col-lg-9 col-12">
              <DetailSingle data={course} />
            </div>
            <div className="col-lg-3 col-12">
              <aside className="aside">
                <Recent data={data} heading={"Blog"} id={id} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProgramDetailPage;
