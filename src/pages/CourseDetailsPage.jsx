import { useParams } from "react-router-dom";
import Similar from "../components/Aside/Similar";
import DetailSingle from "../components/DetailSingle/DetailSingle";
import Layout from "../components/Layout/Layout";
import PageBanner from "../components/PageBanner/PageBanner";
import useFetch from "../custom_hook/useFetch";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

const CourseDetailsPage = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const { loading, data, error } = useFetch({ url: "/courses/" });

  useEffect(() => {
    if (data) {
      setCourse(data[id]);
    }
  }, [id, data]);

  return (
    <Layout>
      <PageBanner pageTitle={"Course Detail"} page={"Course Detail"} />
      {course && (
        <div className="blog__detail section__gap mb-100">
          <div className="container">
            <div className="row gap-3 gap-md-0">
              <div className="col-lg-9 col-12">
                <div className="blog__detail__header">
                  <h1 className="md_heading">{course.name}</h1>
                </div>
                <div className="blog__detail__text">
                  <img src={course.image} alt={course.title} />

                  <div
                    className="blog__info"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(course.description),
                    }}
                  />

                  {course.quote && <em>{course.quote}</em>}

                  {course.subTitle && (
                    <h1 className="sm_heading">{course.subTitle}</h1>
                  )}
                  {course.brief_02 && <p>{course.brief_02}</p>}

                  {course.subTitle_01 && (
                    <h1 className="sm_heading">{course.subTitle_01}</h1>
                  )}
                  <ul>
                    {course.list?.map((listItem, index) => {
                      return <li key={index}>{listItem}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <aside className="aside">
                  <Similar data={data} heading={"Courses"} />
                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CourseDetailsPage;
