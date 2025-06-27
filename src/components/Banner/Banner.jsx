import Slider from "react-slick";
import { Link } from "react-router-dom";
import useFetch from "../../custom_hook/useFetch";
import NoData from "../../container/NoData";
import { BounceLoader } from "react-spinners";

const BannerSingle = ({}) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 50000,
    dots: false,
    arrows: true,
    fade: true,
    cssEase: "linear",
  };

  const { loading, data, error } = useFetch({ url: "/carousels/" });

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          zIndex: "9999",
        }}
      >
        <BounceLoader color="#36d7b7" />;
      </div>
    );
  }

  return (
    <Slider className="banner" {...settings}>
      {!loading && data?.length < 1 && <NoData />}
      {data?.map((item, index) => {
        const { image, title, description, heading } = item.items[0];
        return (
          <div className="banner__item" key={index}>
            <img src={image} alt={heading} />
            <div className="banner__text ">
              <h1 className="sub__heading pb-0">{heading}</h1>
              <h1 className="lg__heading pb-0">{title}</h1>
              <p>{description}</p>

              <div className="btn__group">
                <Link to={"/about"} className="btn btn__1">
                  Read More
                </Link>
                <Link to={"/contact"} className="btn btn__2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default BannerSingle;
