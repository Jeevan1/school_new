import { Link } from "react-router-dom";
import bannerImage from "../../assets/img/03.jpg";
const PageBanner = ({ pageTitle, page, image = bannerImage }) => {
  const style = {
    background: `linear-gradient(to right,rgba(0,0,0,0.2),rgba(0,0,0,0.7)),url(${image} ) `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "300px",
    display: "grid",
    placeItems: "center",
  };
  return (
    <div className="page__banner" style={style}>
      <div className="container">
        <div className="page__banner__content">
          <h1 className="lg__heading">{pageTitle}</h1>
          <div className="page__nav">
            <Link to={"/"}>Home</Link>
            <span className="">{page}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
