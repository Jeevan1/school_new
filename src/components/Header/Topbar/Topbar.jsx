import { FaEnvelopeOpenText, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import useFetch from "../../../custom_hook/useFetch";

const Topbar = ({ onClick }) => {
  const { loading, data, error } = useFetch({ url: "/onlineadmission/" });

  return (
    <div className="topbar">
      <div className="container">
        <div className="row justify-content-center align-items-center px-2">
          <div className="col-md-6 col-12">
            <ul className="flex-wrap flex-md-nowrap gap-1 gap-sm-3">
              <li className="">
                <FaPhone size={16} />
                <Link to={"tel:+977 9848689688"}>+977&nbsp;9848689688</Link>
              </li>
              <li className="">
                <FaEnvelopeOpenText size={16} />
                <Link to={"mailto:prabhadhamkot2010@gmail.com"}>
                  prabhadhamkot2010@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-12 mt-2 mt-md-0">
            <ul className="gap-3">
              <li>
                <button className="btn btn__3 py-2" onClick={onClick}>
                  Suggestions
                </button>
              </li>
              <li>
                <Link
                  to={data[0]?.link}
                  type="button"
                  className="btn btn__3 py-2"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
