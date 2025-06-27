import BlogSingle from "../components/BlogSingle/BlogSingle";
import Layout from "../components/Layout/Layout";
import Data from "../data.json";
import PageBanner from "../components/PageBanner/PageBanner";
import FacultySingle from "../components/FacultySingle/FacultySingle";
const CoursePage = () => {
  return (
    <Layout>
      <PageBanner PageTitle={" Our Courses"} page={"Course"} />
      <div className=" mb-100">
        <FacultySingle isLanding={false} sliceValue={9} />
      </div>
    </Layout>
  );
};

export default CoursePage;
