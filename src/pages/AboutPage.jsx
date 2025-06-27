import Layout from "../components/Layout/Layout";
import About from "../container/About";
import Data from "../data.json";
import TestimonialSingle from "../components/TestimonialSingle/TestimonialSingle";
import PageBanner from "../components/PageBanner/PageBanner";
const AboutPage = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"About Us"} page={"AboutUs"} />
      <About />
      {/* <TestimonialSingle data={Data.testimonials} /> */}
    </Layout>
  );
};

export default AboutPage;
