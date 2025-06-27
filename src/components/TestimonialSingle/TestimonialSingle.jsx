import quote from "../../assets/img/bg/01.png";
import NoData from "../../container/NoData";
import useFetch from "../../custom_hook/useFetch";

import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";
const TestimonialSingle = ({}) => {
  const { loading, data, error } = useFetch({ url: "/testimonials" });
  const setting = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinity: true,
    autoplay: true,
    speed: 1000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="testimonial section__gap">
      <div className="container">
        <SectionTitle
          subTitle={"Students Reviews"}
          title={"Stories of growth, achievement, and inspiration."}
        />
        {!loading && data?.length < 1 && <NoData />}
        <Slider className="row" {...setting}>
          {data?.map((item, index) => {
            return (
              <div className="col-sm-6 col-lg-6 col-12 " key={index}>
                <div className="testimonial__item">
                  <div className="quote">
                    <img src={quote} alt="" />
                  </div>
                  <div className="testimonial__text">
                    <p>{item.description}</p>
                    <div className="client__profile">
                      <img src={item.image} alt={item.name} />

                      <div className="about__client">
                        <h5>{item.name}</h5>
                        <span>{item.position}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSingle;
