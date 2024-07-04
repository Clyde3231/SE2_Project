import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <a>
              <img src="/images/newLogo.png" alt="Logo" />
            </a>
            {/* <i className="fab fa-react"></i> */}
          </Link>


          <div className="menu-icon" onClick={handleClick}>
            <i className={click? "fas fa-times" : "fas fa-bars"} />
          </div>
          
          <ul className={click? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <Link to="../HomeAdmin" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Admin"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li> */}

            {/* <li className="nav-item">
              <Link
                to="/aboutusAdmin"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contactusAdmin"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li> */}

            <li className="nav-item">
              {button? (
                <Button to="/" buttonStyle="btn--outline">
                  Log Out <i className="fas fa-arrow-right" />
                </Button>
              ) : (
                <Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Log Out
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;