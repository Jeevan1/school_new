import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import bannerImage from "../../assets/img/bg/bg.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import useFetch from "../../custom_hook/useFetch";
import NoData from "../../container/NoData";
const CounterSingle = ({}) => {
  const counterStyle = {
    width: "100%",
    height: "400px",
    background: `linear-gradient(to top,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${bannerImage}) fixed center`,
    backgroundPosition: "center/center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "grid",
    placeItems: "center",
  };

  const [large, setLarge] = useState(false);
  const [counterOn, setCounterOn] = useState(false);

  const { loading, error, data } = useFetch({ url: "/milestones/" });

  useEffect(() => {
    // Check if any value in the data array is >= 1000
    const checkLargeValue = () => {
      for (let item of data) {
        if (parseInt(item.value) >= 1000) {
          setLarge(true);
          return;
        }
      }
      setLarge(false); // Reset to false if no value is >= 1000
    };

    checkLargeValue();
  }, [data]);

  return (
    <div className="counter section__gap" style={counterStyle}>
      <div className="container">
        <SectionTitle
          // subTitle={"Our Facility"}
          title={"Milestone till Now"}
        />
        {!loading && data?.length < 1 && <NoData />}
        <div className="row justify-content-center">
          {data?.slice(0, 4).map((item, index) => {
            let value = parseInt(item.count);

            return (
              <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={index}>
                <ScrollTrigger
                  onEnter={() => {
                    setCounterOn(true);
                  }}
                  // onExit={() => setCounterOn(false)}
                >
                  <div className="counter__item">
                    <h1
                      className={large ? " lg__heading large" : "lg__heading"}
                    >
                      {counterOn && (
                        <CountUp start={0} end={value} duration={2} delay={0} />
                      )}
                    </h1>
                    <span className="sm_heading">{item.name}</span>
                  </div>
                </ScrollTrigger>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CounterSingle;
