import { Link } from "react-router-dom";
import logo from "../../assets/img/favicon.png";
const Logo = () => {
  return (
    <div className="menu__logo">
      <Link to={"/"} className="d-flex align-items-center">
        <img src={logo} alt="School Logo" />
        <small>Prabhadham Kot</small>
      </Link>
    </div>
  );
};

export default Logo;
