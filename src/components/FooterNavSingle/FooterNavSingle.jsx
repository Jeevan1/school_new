import { FaEnvelopeOpenText, FaLocationArrow } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo2.png";
import ContactBox from "../ContactBox/ContactBox";
const FooterNavSingle = ({ data }) => {
  return (
    <footer className="footer ">
      {/* <ContactBox />; */}
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="footer__logo">
              <Link to={"/"}>
                {" "}
                <img src={logo} alt="" />
              </Link>
            </div>
            <ul className="contacts">
              <li>
                <FiPhoneCall />
                <span>+977 9848689688</span>
              </li>
              <li>
                <FaLocationArrow />
                <span>Prabha, Sanfebagar,Achham, Nepal</span>
              </li>
              <li>
                <FaEnvelopeOpenText />
                <span>+977 9848689688</span>
              </li>
            </ul>
          </div>

          {data.map((item, index) => {
            return (
              <div className="col-lg-2 col-md-6 col-12" key={index}>
                <div className="footer__links">
                  <h1 className="footer__title">{item.title}</h1>
                  <ul>
                    {item.links.map((link, index) => {
                      return (
                        <li key={index}>
                          <Link to={`${link.link}`}>{link.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="text ">
            <div className="row row-gap-3">
              <p className="col-12 col-md-6">
                copyright &copy; 2024 Shree Prabha Dhamkot (Tech. &amp; Voc.)
                Secondary School.
                <br /> All Rights Reserved
              </p>
              <p className="col-12 col-md-6">
                Designed By:{" "}
                <Link
                  to={"https://www.facebook.com/ganesh.kunwar.710"}
                  target="_blank"
                >
                  Ganesh kunwar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNavSingle;
