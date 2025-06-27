import Form from "../components/Form/Form";
import Layout from "../components/Layout/Layout";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import image from "../assets/img/bg/bg.png";
import PageBanner from "../components/PageBanner/PageBanner";
const ContactPage = () => {
  const MapEmbed = () => {
    const mapEmbedHTML = `<iframe width="600" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/place?q=Tripura+Sundari+Campus,+Sanfebagar,+Nepal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>`;

    return <div dangerouslySetInnerHTML={{ __html: mapEmbedHTML }} />;
  };
  return (
    <Layout>
      <PageBanner pageTitle={"Contact Us"} page={"Contact"} />
      <div className="">
        <div className="container section__gap contact__page ">
          <div className="row m-0 p-0">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle
                subTitle={"Reach Out To Us"}
                title={"Fill up the Form below and our team will reach out you"}
              />
              <Form />
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="map mb-80">
          <MapEmbed />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
