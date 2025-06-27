import BlogSingle from "../components/BlogSingle/BlogSingle";
import Layout from "../components/Layout/Layout";
import Data from "../data.json";
import PageBanner from "../components/PageBanner/PageBanner";
const BlogPage = () => {
  return (
    <Layout>
      <PageBanner pageTitle={" Our Blogs"} page={"Blog"} />
      <div className="mb-100 pt-60">
        <BlogSingle data={Data.blog} sliceValue={9} pagination={true} />
      </div>
    </Layout>
  );
};

export default BlogPage;
