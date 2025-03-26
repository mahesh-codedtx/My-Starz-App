import "./header.css";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";
import downArrowIcon from "../../assets/icons/angle-down-solid.svg";
import { IoMenu } from "react-icons/io5";
import logo from "../../assets/icons/starz-logo-glint.svg";
import MyButton from "../../components/Button";
import { headerList } from "../../utils/header";
import { BrowserRouter, Link, Router, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  // Function to close the nav bar when an item is clicked
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <section className="header-container">
      <div className="header-left">
        <div style={{ width: "140px" }} onClick={() => navigate("/")}>
          <img src={logo} className="cursor"></img>
        </div>
        <ul className="header-list">
          {headerList.map((header, index) => {
            return (
              <>
                <li
                  key={index}
                  className="cursor flex"
                  style={{ gap: "5px" }}
                  onClick={() => navigate(header.pageLink)}
                >
                  {index === 4 && (
                    <img src={searchIcon} style={{ width: "15px" }} />
                  )}
                  {/* <Link to={}>{header.title}</Link> */}
                  <p>{header.title}</p>
                  {index === 4 && (
                    <img src={downArrowIcon} style={{ width: "15px" }} />
                  )}
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="header-right">
        <p className="cursor">LOG IN</p>
        <MyButton btnText={"Claim Special Offer"} padding={"thin"} />
      </div>
      <div className="header-menu-icon">
        <div
          className={`menu-icon ${isOpen ? "icon-move" : ""}`}
          onClick={toggleNav}
        >
          {isOpen ? "✖" : "☰"}
        </div>
        <div className={`side-nav ${isOpen ? "open" : ""}`}>
          <ul className="header-list-side">
            {headerList.map((header, index) => {
              return (
                <>
                  <li
                    key={index}
                    className="cursor flex"
                    style={{ gap: "5px" }}
                    onClick={() => {
                      navigate(header.pageLink);
                      closeNav();
                    }}
                  >
                    {index === 4 && (
                      <img src={searchIcon} style={{ width: "15px" }} />
                    )}
                    {/* <Link to={}>{header.title}</Link> */}
                    <p>{header.title}</p>
                    {index === 4 && (
                      <img src={downArrowIcon} style={{ width: "15px" }} />
                    )}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Header;
