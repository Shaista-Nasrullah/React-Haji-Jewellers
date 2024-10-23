import React, { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { FiAlignRight } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "../../styles/anotherHeader.css";

const Header = () => {
  // State for toggling the menu visibility
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <>
      {/* <!--=============== HEADER ===============--> */}
      <header className="header">
        <nav className="nav container">
          <div className="nav__data">
            <Link to="/" className="nav__logo">
              <GiShoppingBag /> Haji Jewellers
            </Link>

            {/* Toggle button for burger and close icons */}
            <div
              className={`nav__toggle ${isMenuVisible ? "show-icon" : ""}`}
              onClick={toggleMenu}
            >
              {isMenuVisible ? (
                <ImCross className="nav__close" /> // Close icon
              ) : (
                <FiAlignRight className="nav__burger" /> // Burger icon
              )}
            </div>
          </div>

          {/*=============== NAV MENU ===============*/}
          <div className={`nav__menu ${isMenuVisible ? "show-menu" : ""}`}>
            <ul className="nav__list">
              <li>
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>

              {/*============== DROPDOWN ===============*/}

              <li class="dropdown__item">
                <div class="nav__link">
                  Categories
                  <IoIosArrowDown className="dropdown__arrow" />
                </div>
                <ul class="dropdown__menu">
                  <li>
                    <Link to="/ringgs" className="dropdown__link">
                      Rings
                    </Link>
                  </li>
                  <li>
                    <Link to="/Sets" className="dropdown__link">
                      Set
                    </Link>
                  </li>
                  <li>
                    <Link to="/Bengles" className="dropdown__link">
                      Bengles
                    </Link>
                  </li>
                  <li>
                    <Link to="/HoopEarrings" className="dropdown__link">
                      Hoop Earrings
                    </Link>
                  </li>
                  <li>
                    <Link to="/Earrings" className="dropdown__link">
                      Earrings
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/Services" className="nav__link">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/Location" className="nav__link">
                  Location
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
