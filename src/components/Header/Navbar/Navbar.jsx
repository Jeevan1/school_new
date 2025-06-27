import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/img/logo.png";
import logo2 from "../../../assets/img/logo2.png";

const Navbar = ({ data }) => {
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
  const dropdownRef = useRef(null);

  const location = useLocation();

  const isActive = (link) => {
    return location.pathname === link;
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownIndex(null);
    }
  };

  const handleMenuClick = (index, hasDropdown) => {
    if (hasDropdown) {
      setDropdownIndex(dropdownIndex === index ? null : index);
    } else {
      setDropdownIndex(null);
    }
  };

  const changeMobileMenu = () => {
    setMobileMenuStatus(!mobileMenuStatus);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="menu">
      <div className="container">
        <div className="menu__bar">
          <div className="menu__logo">
            <Link to={"/"}>
              <img src={logo2} alt="School Logo" className="d-md-none" />
              <img src={logo} alt="School Logo" className="d-none d-md-block" />
            </Link>
          </div>
          <ul
            className={mobileMenuStatus ? "menu__items active" : "menu__items"}
          >
            <li className="d-md-none">
              <div className="menu__logo">
                <Link to={"/"}>
                  <img src={logo} alt="School Logo" />
                </Link>
              </div>

              <button
                className="btn__close d-md-none"
                onClick={changeMobileMenu}
              >
                <AiOutlineClose size={24} />
              </button>
            </li>
            {data.map((navLink, index) => {
              const hasDropdown = navLink.subItem && navLink.subItem.length > 0;

              return (
                <li
                  key={index}
                  className={hasDropdown ? "has_child" : ""}
                  ref={hasDropdown ? dropdownRef : null}
                >
                  <Link
                    onClick={() => handleMenuClick(index, hasDropdown)}
                    className={isActive(navLink.link) ? "active" : ""}
                    to={hasDropdown ? "#" : navLink.link}
                  >
                    {navLink.item}
                    {hasDropdown && <MdKeyboardArrowDown size={25} />}
                  </Link>

                  {hasDropdown && dropdownIndex === index && (
                    <ul className="dropdown__items active">
                      {navLink.subItem.map((dropdownItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            className={
                              isActive(dropdownItem.link) ? "active" : ""
                            }
                            to={dropdownItem.link}
                          >
                            {dropdownItem.item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <button className="burger d-md-none" onClick={changeMobileMenu}>
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
