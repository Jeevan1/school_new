import Banner from "../components/Banner/Banner";
import About from "../container/About";
import FacultySingle from "../components/FacultySingle/FacultySingle";
import FacilitySingle from "../components/FacilitySingle/FacilitySingle";
import CounterSingle from "../components/CounterSingle/CounterSingle";
import AlbumSingle from "../components/AlbumSingle/AlbumSingle";
import TestimonialSingle from "../components/TestimonialSingle/TestimonialSingle";
import Layout from "../components/Layout/Layout";

import Data from "../data.json";

import NoticeSingle from "../components/NoticeSingle/NoticeSingle";
import Popup from "../components/Popup/Popup";
import BlogSingle from "../components/BlogSingle/BlogSingle";
import MessageFrom from "../components/message/MessageFrom";
import Reports from "../components/ReportSingle/Report";

const LandingPage = () => {
  return (
    <main className="main">
      <Layout>
        <Banner data={Data.banner} />
        <MessageFrom />
        <FacultySingle
          data={Data.faculty}
          sectionTitle={true}
          isLanding={true}
          sliceValue={4}
        />
        <FacilitySingle
          data={Data.facility}
          sectionTitle={true}
          isLanding={true}
          sliceValue={4}
        />
        <CounterSingle data={Data.counter} />
        <NoticeSingle
          data={Data.notices}
          sliceValue={4}
          sectionTitle={true}
          pagination={false}
          isLanding={true}
        />
        <Reports
          data={Data.notices}
          sliceValue={4}
          sectionTitle={true}
          pagination={false}
          isLanding={true}
        />
        <AlbumSingle
          data={Data.albums}
          sliceValue={4}
          sectionTitle={true}
          isLanding={true}
        />
        <TestimonialSingle data={Data.testimonials} />
        <BlogSingle
          data={Data.blog}
          sliceValue={4}
          sectionTitle={true}
          isLanding={true}
        />

        <Popup />
      </Layout>
    </main>
  );
};

export default LandingPage;
